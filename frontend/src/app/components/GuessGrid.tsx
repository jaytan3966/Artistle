import GuessGridClient from "./GuessGridClient";

export function getSecondsToLocalMidnight() {
  const now = new Date();
  const midnight = new Date();
  
  midnight.setHours(24, 0, 0, 0);
  
  const diffMs = midnight.getTime() - now.getTime();
  return Math.floor(diffMs / 1000);
}

export default async function GuessGrid(){
    const target = await fetch(
        `http://localhost:5050/api/getArtistle?date=${new Date().toLocaleDateString('en-CA')}`, 
        {
            next: { 
            tags: ['artist-of-the-day'],
            revalidate: getSecondsToLocalMidnight()
            }
        }).then(res => res.json());
    return <GuessGridClient target={target}/>

}