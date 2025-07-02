from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import pandas as pd
from upstash_redis import Redis
from dotenv import load_dotenv
import os
import json
import boto3

app = Flask(__name__)
CORS(app)

df = pd.read_csv("Artists.csv") 
df = df.drop(['ID', 'Genres'], axis=1)
df = df.replace(0, None)
df = df.dropna()
df["Name"] = df["Name"].str.lower()
df["Age"] = df["Age"] + 6

sorted_df = df.sort_values("Popularity", ascending=False).head(500).reset_index(drop=True)

load_dotenv()

r = Redis(
    url=os.getenv("UPSTASH_REDIS_REST_URL"),
    token=os.getenv("UPSTASH_REDIS_REST_TOKEN")
)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('artistleHistory')

@app.route('/api/todayArtistle')
def get_artistle():
    artist = r.get("artistleToday")
    response = make_response(artist)
    response.headers['Cache-Control'] = 'public, max-age=86400'
    return response

@app.route('/api/todays')
def get_today():
    player = request.args.get('param')
    todaysGuesses = r.get(player)
    if todaysGuesses:
        guesses = json.loads(todaysGuesses)
        return jsonify({"guesses": guesses})
    return jsonify({"guesses": []})

@app.route('/api/stats')
def get_stats():
    playerId = request.args.get('param')
    response = table.get_item(
        Key={
            'playerId': playerId  
        }
    )
    return response["Item"]


@app.route('/api/check', methods=['POST'])
def check_guess():
    data = request.json
    target_artist = data['target']
    guess = data['guess']
    guess_count = data['guessCount']
    guess_index = sorted_df.index[sorted_df["Name"] == guess].tolist()[0]
    guess_info = sorted_df.iloc[guess_index]

    comparisons = {
        "Name" : 'bg-green-600' if guess_info["Name"].upper() == target_artist["Name"] else 'bg-gray-600',
        "Gender": 'bg-green-600' if guess_info["Gender"].upper() == target_artist["Gender"] else 'bg-gray-600',
        "Age": 'bg-green-600' if abs(guess_info["Age"] - target_artist["Age"]) == 0 else 'bg-yellow-500' if abs(guess_info["Age"] - target_artist["Age"]) < 5 else 'bg-gray-600',
        "Popularity": 'bg-green-600' if abs(guess_info["Popularity"] - target_artist["Popularity"]) == 0 else 'bg-yellow-500' if abs(guess_info["Popularity"] - target_artist["Popularity"]) < 10 else 'bg-gray-600',
        "Followers": 'bg-green-600' if abs(guess_info["Followers"] - target_artist["Followers"]) == 0 else 'bg-yellow-500' if abs(guess_info["Followers"] - target_artist["Followers"]) < 100000 else 'bg-gray-600',
    }
    guess_info = guess_info.to_dict()
    guess_info["Name"] = guess_info["Name"].upper()
    guess_info["Gender"] = guess_info["Gender"].upper()
    
    return jsonify({
        "correct": guess_info["Name"].upper() == target_artist["Name"],
        "guess_info": guess_info,
        "comparisons": comparisons,
        "guess_count": guess_count + 1
    })

@app.route('/api/todaysGuesses', methods=['POST'])
def todays_guesses():
    data = request.json
    playerId = data['playerId']
    guesses = json.dumps(data['guesses'])
    ttl = data['ttl']
    response = r.set(playerId, guesses)
    response = r.expire(playerId, ttl)
    return jsonify({"resp" : response})

@app.route('/api/results', methods=['POST'])
def post_results():
    data = request.json
    playerId = data['playerId']
    guessCount = data['guessCount']
    win = data['win']
    
    try:
        if win:
            table.update_item(
                Key={
                    'playerId': playerId  
                },
                ExpressionAttributeValues={
                    ':inc': 1
                },
                ExpressionAttributeNames={
                    '#guess':str(guessCount)
                },
                UpdateExpression="ADD \
                totalGames :inc, \
                wins :inc, \
                guessDistribution.#guess :inc",
            )
        else:
            table.update_item(
                Key={'playerId': playerId},
                ExpressionAttributeValues={
                    ':inc': 1
                },
                UpdateExpression="ADD \
                totalGames :inc"
            )
    except:
        guessDistribution = {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0
        }
        if win:
            guessDistribution[str(guessCount)]=1
        table.put_item(
            Item={
            'playerId': playerId,
            'totalGames': 1,
            'wins' : 1 if win else 0,
            'guessDistribution': guessDistribution
        })
    return jsonify({"valid": True})
        
if __name__ == '__main__':
    app.run(port=5050, debug=True)
