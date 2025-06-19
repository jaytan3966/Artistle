export const categories = ["NAME", "GENDER", "AGE", "POPULARITY", "FOLLOWERS"];

export default function GuessGrid(){
    return(
        <div className="mx-auto max-w-3xl">

            <div className="grid grid-cols-5 mb-2 text-center font-bold max-w-[98vw]">
                {categories.map((name, i) => (
                <h1 key={i} className="p-2 text-sm md:text-lg">{name}</h1>
                ))}
            </div>
            
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2 max-w-[98vw]">
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
                    <div className="box border-2 border-gray-400 rounded-lg text-2xl m-1 duration-500 text-center w-2xl max-w-[98vw]">HINT</div>
                    <input className="box border-2 border-gray-400 rounded-md text-2xl m-1 duration-500 text-center w-2xl focus:outline-none max-w-[98vw]" placeholder="Enter guess..."></input>
                    <button className="box border-2 border-gray-400 rounded-md text-2xl font-bold m-1 duration-500 text-center w-2xl hover:bg-white hover:text-[#121213] max-w-[98vw]">SUBMIT</button>
                </div>
            </div>

        </div>
    )
}