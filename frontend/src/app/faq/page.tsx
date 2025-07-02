import NavBar from "../components/Navbar";

export default function Faq() {
  return (
    <div className="grid">
      <header>
        <NavBar/>
      </header>
      <div className="flex items-center justify-center">
        <div className="perspective-1000 max-w-full max-h-full rounded-s relative text-center p-3">
          <h1 className="font-bold text-3xl mb-3">HOW TO PLAY</h1>
          <p>Guess the hidden artist in 6 tries.</p>
          <p>Each guess must be a valid artist from the dropdown menu. Hit the enter button to submit the guess.</p>
          <p>After your submission, the color of the tiles will change as in the examples below.</p>
          <div className="grid grid-cols-5 gap-2 m-3">
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                TAYLOR SWIFT
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                FEMALE
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-yellow-500`}>
                36
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                100
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                95859165
              </div>
          </div>
          <p>The artistle of the day is a female and her age is within 5 years of 36.</p>
          <div className="grid grid-cols-5 gap-2 m-3">
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                AVA MAX
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                FEMALE
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                26
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-yellow-500`}>
                77
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                6310299
              </div>
          </div>
          <p>The artistle of the day is a female and her popularity is within 10 points of 77.</p>
          <div className="grid grid-cols-5 gap-2 m-3">
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                BRUNO MARS
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-gray-600`}>
                MALE
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-yellow-500`}>
                34
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-yellow-500`}>
                86
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-yellow-500`}>
                52946753
              </div>
          </div>
          <p>The artistle of the day has an age within 10 years of 34, a populartiy of within 10 points of 86, and her number of followers is within 100,000 followers of 53224523.</p>
          <div className="grid grid-cols-5 gap-2 m-3">
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                ADELE
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                FEMALE
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                32
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                83
              </div>
              <div className={`w-full h-20 border-2 border-gray-800 rounded-s relative backface-hidden flex items-center justify-center font-bold text-lg text-center overflow-hidden bg-green-600`}>
                53224523
              </div>
          </div>
          <p>The artistle of the day is Adele!</p>
        </div>
      </div>
    </div>
  );
}
