import SearchableInput from "./SearchableInput";
export const categories = ["NAME", "GENDER", "AGE", "POPULARITY", "FOLLOWERS"];

function getSecondsToLocalMidnight() {
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
    

    return(
        <div className="mx-auto max-w-3xl">

            <div className="grid grid-cols-5 mb-2 text-center font-bold max-w-[96vw]">
                {categories.map((name, i) => (
                <h1 key={i} className="p-2 text-sm md:text-lg">{name}</h1>
                ))}
            </div>
            
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2 max-w-[97vw]">
                {categories.map((_, colIndex) => (
                    <div 
                    key={colIndex} 
                    className="border-2 border-gray-400 rounded-s p-2 h-20 flex items-center justify-center duration-500"
                    >
                    </div>
                ))}
                </div>
            ))}

            <div className="flex items-center justify-center">
                <div className="grid">
                    <SearchableInput/>
                    <button className="box border-2 border-gray-400 rounded-md text-2xl font-bold m-1 duration-500 text-center w-2xl hover:bg-gray-200 hover:text-[#121213] max-w-[98vw]">SUBMIT</button>
                    <h1 className="flex items-center justify-center text-center">Target: Name: {target?.Name} Gender: {target?.Gender} Age: {target?.Age} Popularity: {target?.Popularity} Followers: {target?.Followers}</h1>
                </div>
            </div>
            

        </div>
    )
}