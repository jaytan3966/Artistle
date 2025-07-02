interface artistInfo{
    Name: string,
    Gender: string,
    Age: number,
    Popularity: number,
    Followers: number,
}
export interface GuessGridClientProps {
  target: artistInfo;
}
interface comparisonInfo{
    Name: string,
    Gender: string,
    Age: string,
    Popularity: string,
    Followers: string
}
export interface guessInfo{
    comparisons: comparisonInfo,
    correct: boolean,
    guess_count: number,
    guess_info: artistInfo
}