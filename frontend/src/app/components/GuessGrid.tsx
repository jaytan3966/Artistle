export const categories = ["NAME", "GENDER", "AGE", "POPULARITY", "FOLLOWERS"];

export default function GuessGrid(){
    return(
        <div className="mx-auto max-w-3xl">

            <div className="grid grid-cols-5 mb-2 text-center font-bold">
                {categories.map((name, i) => (
                <h1 key={i} className="p-2">{name}</h1>
                ))}
            </div>

            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2">
                {categories.map((_, colIndex) => (
                    <div 
                    key={colIndex} 
                    className="border-2 border-gray-400 p-2 h-12 md:h-20 flex items-center justify-center duration-500"
                    >
                    </div>
                ))}
                </div>
            ))}

            <div className="flex items-center justify-center">
                <div className="grid">
                    <input className="box border-2 border-gray-400 text-2xl m-1 duration-500 text-center w-2xl focus:outline-none" placeholder="Enter guess..."></input>
                    <button className="box border-2 border-gray-400 text-2xl m-1 duration-500 text-center w-2xl hover:bg-white hover:text-[#121213]">SUBMIT</button>
                </div>
            </div>

        </div>
    )
}