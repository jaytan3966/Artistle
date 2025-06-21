from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("Artists.csv") 
df = df.drop(['ID', 'Genres'], axis=1)
df = df.replace(0, None)
df = df.dropna()
df["Name"] = df["Name"].str.lower()
df["Age"] = df["Age"] + 6

sorted_df = df.sort_values("Popularity", ascending=False).head(500).reset_index(drop=True)

@app.route('/api/check', methods=['POST'])
def check_guess():
    data = request.json
    target_artist = data['target']
    guess = data['guess']
    guess_count = data.get('guessCount', 0)
    
    if guess.lower() == target_artist["Name"]:
        return jsonify({"correct": True})
    
    if guess in sorted_df["Name"].values:
        guess_index = sorted_df.index[sorted_df["Name"] == guess].tolist()[0]
        guess_info = sorted_df.iloc[guess_index]
        
        comparisons = {
            "Gender": 0 if guess_info["Gender"] == target_artist["Gender"] else 3,
            "Age": compare_values(guess_info["Age"], target_artist["Age"]),
            "Popularity": compare_values(guess_info["Popularity"], target_artist["Popularity"]),
            "Followers": compare_values(guess_info["Followers"], target_artist["Followers"])
        }
        
        return jsonify({
            "correct": False,
            "guess_info": guess_info.to_dict(),
            "comparisons": comparisons,
            "guess_count": guess_count + 1
        })
    
    return jsonify({"error": "Artist not found"}), 404

def compare_values(guess_val, target_val):
    diff = guess_val - target_val
    if diff == 0:
        return 0
    return 1 if diff > 0 else 2

if __name__ == '__main__':
    app.run(port=5050, debug=True)