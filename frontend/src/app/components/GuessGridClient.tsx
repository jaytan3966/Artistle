"use client"
const categories = ["Name", "Gender", "Age", "Popularity", "Followers"];
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { GuessGridClientProps, guessInfo } from "./Interfaces";

export default function GuessGridClient({target}: GuessGridClientProps){
    const [inputValue, setInputValue] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [win, setWin] = useState(false);
    const items = ['TAYLOR SWIFT', 'DRAKE', 'BAD BUNNY', 'THE WEEKND', 'TRAVIS SCOTT', 'LANA DEL REY', 'JUNG KOOK', 'FEID', 'JUSTIN BIEBER', 'ARIANA GRANDE', '21 SAVAGE', 'ARIJIT SINGH', 'KAROL G', 'SZA', 'OLIVIA RODRIGO', 'ED SHEERAN', 'COLDPLAY', 'BRUNO MARS', 'DOJA CAT', 'KENDRICK LAMAR', 'POST MALONE', 'CHRIS BROWN', 'BILLIE EILISH', 'METRO BOOMIN', 'JUICE WRLD', 'DUA LIPA', 'J. COLE', 'ANUEL AA', 'IMAGINE DRAGONS', 'BTS', 'PRITAM', 'MYKE TOWERS', 'DAVID GUETTA', 'MORGAN WALLEN', 'TATE MCRAE', 'SIA', 'BEYONCÉ', 'MICHAEL BUBLÉ', 'DADDY YANKEE', 'ARCTIC MONKEYS', 'XXXTENTACION', 'SHAKIRA', 'OZUNA', 'ANIRUDH RAVICHANDER', 'NOAH KAHAN', 'LINKIN PARK', 'THE BEATLES', 'JACK HARLOW', 'ADELE', 'MALUMA', 'PLAYBOI CARTI', 'HARRY STYLES', 'TYLER, THE CREATOR', 'MARIAH CAREY', 'CALVIN HARRIS', 'GUNNA', 'SAM SMITH', 'MAROON 5', 'LIL UZI VERT', 'MARSHMELLO', 'J BALVIN', 'QUEEN', 'KATY PERRY', 'YOUNG THUG', 'LADY GAGA', 'BRENT FAIYAZ', 'THE NEIGHBOURHOOD', 'ARCÁNGEL', 'STRAY KIDS', 'KALI UCHIS', 'FRANK SINATRA', 'LUKE COMBS', 'LIL PEEP', 'HOZIER', 'MAC MILLER', 'HENRIQUE & JULIANO', 'LUIS MIGUEL', 'JIMIN', 'JAY-Z', 'SFERA EBBASTA', 'RED HOT CHILI PEPPERS', 'SHAWN MENDES', 'SELENA GOMEZ', 'BLACKPINK', 'TIËSTO', '50 CENT', 'ELTON JOHN', 'KHALID', 'ONE DIRECTION', 'DON OMAR', 'SHREYA GHOSHAL', 'FARRUKO', 'STEVE LACY', 'A$AP ROCKY', 'PITBULL', 'MORAT', 'ROMEO SANTOS', 'JAMES ARTHUR', 'LIL DURK', 'ONEREPUBLIC', 'MICHAEL JACKSON', 'TORY LANEZ', 'THE KID LAROI', 'SNOOP DOGG', 'LIL TECCA', 'GUSTTAVO LIMA', 'P!NK', 'TROYE SIVAN', 'BRYANT MYERS', 'WIZ KHALIFA', 'TRIPPIE REDD', 'KELLY CLARKSON', 'POP SMOKE', 'BRITNEY SPEARS', 'GREEN DAY', 'HALSEY', 'RADIOHEAD', 'NIRVANA', 'CHARLIE PUTH', 'AKON', 'ELVIS PRESLEY', 'FLEETWOOD MAC', 'KODAK BLACK', 'JUSTIN TIMBERLAKE', 'USHER', 'ALAN WALKER', 'DAFT PUNK', 'SABRINA CARPENTER', 'CHRIS STAPLETON', 'MELANIE MARTINEZ', 'KID CUDI', 'SEVENTEEN', 'ROSALÍA', 'ÑENGO FLOW', 'EMILIA', 'AC/DC', 'MADONNA', 'JUL', 'NF', 'BING CROSBY', 'PENTATONIX', 'RAYE', 'DEAN MARTIN', 'NLE CHOPPA', 'CHRISTIAN NODAL', 'NAT KING COLE', 'CHENCHO CORLEONE', 'BRYSON TILLER', 'ALKA YAGNIK', 'THE CHAINSMOKERS', 'TWENTY ONE PILOTS', 'TY DOLLA $IGN', 'NICKY JAM', 'A BOOGIE WIT DA HOODIE', 'SEBASTIAN YATRA', 'CAMILA CABELLO', 'SEAN PAUL', 'AVICII', 'LEWIS CAPALDI', 'MARÍLIA MENDONÇA', 'BEBE REXHA', 'NICKI NICOLE', 'UDIT NARAYAN', 'ABBA', 'THE ROLLING STONES', 'CHILDISH GAMBINO', 'CHASE ATLANTIC', 'TINI', 'JULIÓN ÁLVAREZ Y SU NORTEÑO BANDA', 'SUMMER WALKER', 'ALOK', 'ZÉ NETO & CRISTIANO', 'BECKY G', '2PAC', 'A.R. RAHMAN', "GUNS N' ROSES", 'DABABY', 'TYGA', 'NE-YO', 'PARTYNEXTDOOR', 'RAMMSTEIN', 'AVA MAX', 'QUAVO', 'TWICE', 'BLINK-182', 'SECH', 'CREEDENCE CLEARWATER REVIVAL', 'TAME IMPALA', 'WISIN & YANDEL', 'TAINY', 'PINK FLOYD', 'MIGUEL', 'LIL TJAY', 'LIL YACHTY', 'WHAM!', 'SYSTEM OF A DOWN', 'CARDI B', 'DR. DRE', 'BLACK EYED PEAS', 'MEGHAN TRAINOR', 'PLAN B', 'FALL OUT BOY', 'CHINO PACAS', 'YANDEL', 'SLIPKNOT', 'DEMI LOVATO', 'JONAS BROTHERS', 'MATHEUS & KAUAN', 'NINHO', 'JID', 'MANÁ', 'REIK', 'PARAMORE', 'JHENÉ AIKO', 'PHARRELL WILLIAMS', 'FLO RIDA', 'GORILLAZ', 'SIMONE MENDES', 'BON JOVI', 'LABRINTH', 'AVENTURA', 'U2', 'BOB MARLEY & THE WAILERS', 'TOMORROW X TOGETHER', 'JASON DERULO', 'FOO FIGHTERS', 'BABY KEEM', 'CAMILO', 'ANDY WILLIAMS', 'BRING ME THE HORIZON', 'DJ SNAKE', 'ENRIQUE IGLESIAS', 'DJ LUIAN', 'LUAN SANTANA', 'KYGO', 'TOM ODELL', 'DAVID KUSHNER', 'KACEY MUSGRAVES', 'LOST FREQUENCIES', 'ALICIA KEYS', 'THE NOTORIOUS B.I.G.', 'OSCAR MAYDON', 'THE 1975', 'RODDY RICCH', '5 SECONDS OF SUMMER', 'MACHINE GUN KELLY', 'CARTEL DE SANTA', 'JUSTIN QUILES', 'LUÍSA SONZA', 'ANDERSON .PAAK', 'TIMBALAND', 'JOHANN SEBASTIAN BACH', 'DAVID BOWIE', 'CHRISTINA AGUILERA', 'STEVIE WONDER', 'ZARA LARSSON', 'LENNY TAVÁREZ', 'DANNY OCEAN', 'JOHN MAYER', 'MACKLEMORE', 'DE LA GHETTO', 'T-PAIN', 'JOHN WILLIAMS', 'JOHN LEGEND', 'BEE GEES', 'PANIC! AT THE DISCO', 'ROBIN SCHULZ', 'THE KILLERS', 'EL ALFA', '2 CHAINZ', 'ALEC BENJAMIN', 'NATE DOGG', '(G)I-DLE', 'FLORENCE + THE MACHINE', 'EAGLES', 'BRUCE SPRINGSTEEN', 'BON IVER', 'BILLY JOEL', 'TITO DOUBLE P', 'SHIVA', 'LOS ÁNGELES AZULES', 'WHITNEY HOUSTON', 'LUDACRIS', 'RUSS', 'SHILPA RAO', 'LUDMILLA', 'ZAYN', 'DILJIT DOSANJH', 'ZION & LENNOX', 'SONU NIGAM', 'KUMAR SANU', 'DJ KHALED', 'NELLY FURTADO', 'NICKELBACK', 'ATIF ASLAM', 'MARC ANTHONY', 'JUANES', 'YO YO HONEY SINGH', 'DEAN LEWIS', 'JUAN LUIS GUERRA 4.40', 'NIALL HORAN', 'HANS ZIMMER', 'CHIEF KEEF', 'LAUV', 'KESHA', 'SKRILLEX', 'MC KEVIN O CHRIS', 'RICARDO ARJONA', 'OASIS', 'LORDE', 'THE POLICE', 'JOAN SEBASTIAN', 'SID SRIRAM', 'THE CURE', 'LOGIC', 'WESLEY SAFADÃO', 'ALEJANDRO SANZ', 'LUKE BRYAN', 'THE STROKES', 'TULUS', 'MEEK MILL', 'CHARLI XCX', 'DIRE STRAITS', 'LORD HURON', 'LILY-ROSE DEPP', 'MAITE PERRONI', 'SHANKAR MAHADEVAN', 'RAF CAMORA', 'SWEDISH HOUSE MAFIA', 'ALEJANDRO FERNÁNDEZ', 'MUSE', 'BOBBY HELMS', 'AEROSMITH', 'GLASS ANIMALS', 'KING GNU', 'JUAN GABRIEL', 'IVAN CORNEJO', 'MONEYBAGG YO', 'PAUL MCCARTNEY', 'PHIL COLLINS', 'UZI', 'DARYL HALL & JOHN OATES', 'BONEZ MC', 'MARRACASH', 'ELLA FITZGERALD', 'PRINCE ROYCE', 'BLACKBEAR', 'TEDUA', 'G-EAZY', 'CALUM SCOTT', 'BRYAN ADAMS', 'KIM PETRAS', 'AMY WINEHOUSE', 'NORIEL', 'ANAHÍ', 'MRS. GREEN APPLE', 'R3HAB', 'AVRIL LAVIGNE', 'H.E.R.', 'VANCE JOY', 'CÉLINE DION', 'YUVAN SHANKAR RAJA', 'BACKSTREET BOYS', 'GHOST', 'JACK JOHNSON', 'MARTIN GARRIX', 'MARCO ANTONIO SOLÍS', 'BRYTIAGO', 'BASTILLE', 'MARVIN GAYE', 'LAZZA', 'RYAN LEWIS', 'T.I.', 'FELIX JAEHN', 'OUTKAST', 'EMPIRE OF THE SUN', 'PEARL JAM', 'THE CRANBERRIES', 'MOHIT CHAUHAN', 'ELLEY DUHÉ', 'OROCHI', 'ALEMÁN', 'FMK', 'HARDY', 'SODA STEREO', 'CALIBRE 50', 'MELENDI', 'RED VELVET', 'KINGS OF LEON', 'DOLLY PARTON', 'HA*ASH', 'THE BEACH BOYS', 'DALEX', 'AGUST D', 'KYLIE MINOGUE', 'PERRY COMO', 'JULIA MICHAELS', 'THE RONETTES', 'PNL', 'ROBBIE WILLIAMS', 'GUSTAVO MIOTO', 'SUNIDHI CHAUHAN', 'CHARLIE BROWN JR.', 'JULIETA VENEGAS', 'NELLY', 'ALESSIA CARA', 'MON LAFERTE', 'JOHN LENNON', 'WOLFGANG AMADEUS MOZART', 'LITTLE MIX', 'JENNIFER LOPEZ', 'KHEA', 'AITANA', 'ALESSO', 'BURL IVES', 'ARMIN VAN BUUREN', 'JONAS BLUE', '6LACK', 'DAMSO', 'SORRISO MAROTO', 'GUÈ', 'VISHAL DADLANI', 'JOSÉ FELICIANO', 'SEZEN AKSU', 'LA OREJA DE VAN GOGH', 'MARK RONSON', 'FUJII KAZE', 'LIZZO', 'DISTURBED', 'NATALIA LAFOURCADE', '*NSYNC', 'RUTH B.', 'JUNGLE', 'YNW MELLY', 'TRAIN', 'TOVE LO', 'GEORGE MICHAEL', 'TOPIC', 'PUSHA T', 'PABLO ALBORÁN', 'BRONCO', 'CLEAN BANDIT', 'JAY CHOU', 'SKI MASK THE SLUMP GOD', 'RAHAT FATEH ALI KHAN', 'LUIS FONSI', 'SKEPTA', 'WILL.I.AM', 'THE JACKSON 5', 'R.E.M.', 'JUICY J', 'COSCULLUELA', 'HINDIA', 'BECKY HILL', 'FLORIDA GEORGIA LINE', 'JASON ALDEAN', 'JEREMIH', 'KISHORE KUMAR', 'DIDDY', 'BACK NUMBER', 'JOURNEY', 'CARLOS RIVERA', 'LANY', 'AURORA', 'GLORIA TREVI', 'BILL WITHERS', 'B.O.B', 'BLAKE SHELTON', 'YG', 'CARLOS VIVES', 'JOHNNY CASH', 'KEHLANI', 'TOTO', 'BUSTA RHYMES', 'GIMS', 'JOEY BADA$$', 'JORJA SMITH', 'DILSINHO', 'JESSIE MURPH', 'FIVE FINGER DEATH PUNCH', 'KEANE', 'GEORGE EZRA', 'NORAH JONES', 'SHANIA TWAIN', 'GERARDO ORTIZ', 'CHAYANNE', 'JAY ROCK', 'GABRY PONTE', 'NATTI NATASHA', 'MUMFORD & SONS', 'DERMOT KENNEDY', 'DJ NELSON', 'YURIDIA', 'DANNA PAOLA', 'ITZY', 'GESAFFELSTEIN', 'WEEZER', 'SOOLKING', 'CARLY RAE JEPSEN', 'LA ADICTIVA']
    
    const [guesses, setGuesses] = useState<guessInfo[]>([]);
    const [flippedRow, setFlippedRow] = useState<number | null>(null);

    useEffect(() => {
        if (guesses.length >= 0) {
            setFlippedRow(guesses.length);
        }
    }, [guesses]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        const filteredItems = items.filter(item =>
            item.toUpperCase().includes(value.toUpperCase())
        );

        setVisible(value !== '' && filteredItems.length>0);
    }
    const handleItemClick = (item:string) => {
        setInputValue(item);
        setVisible(false);
    }
    const submit = async () => {
        if (count > 5 || win){
            setInputValue('');
            return;
        }
        if (inputValue.toUpperCase() === target.Name.toUpperCase()){
            const result = {"correct": true, "guess_info": target, "comparisons": {"Name" : 'bg-green-600', 'Gender': 'bg-green-600', "Age": 'bg-green-600', 'Popularity': 'bg-green-600', "Followers": 'bg-green-600'}, "guess_count":count+1}
            setCount(count+1);
            setGuesses(prevGuesses => [...prevGuesses, result]);
            setWin(true);
            setTimeout(() => {
                if (count === 0){
                    alert("YOU'RE INSANE!");
                } else if (count === 1){
                    alert("That was fast!");
                } else if (count === 2){
                    alert("Good job!");
                } else if (count === 3){
                    alert("Nice!");
                } else if (count === 4){
                    alert("Close one!");
                } else {
                    alert("Phew!");
                }
            }, 1500);
        } else {
            try {
                if (count <= 5 && items.includes(inputValue.toUpperCase())){
                    const response = await fetch('http://localhost:5050/api/check',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        guess: inputValue.trim(),
                        target: target,
                        guessCount: count
                    }),
                    });
                    const result = await response.json();
                    setGuesses(prevGuesses => [...prevGuesses, result]);
                    setCount(result.guess_count);
                    if (count === 5){
                        setTimeout(() => {
                            alert(`Today's Artist: ${target?.Name}\nBetter luck tomorrow!`);
                        }, 1500);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
        setInputValue('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            submit();
        }
        if (win){
            event.preventDefault();
        }
    }

    return(
        <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-5 mb-2 text-center font-bold max-w-[96vw]">
                {categories.map((name, i) => (
                <h1 key={i} className="p-2 text-sm md:text-lg">{name.toUpperCase()}</h1>
                ))}
            </div>

            {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 gap-2 mb-2 max-w-[97vw]">
                {(['Name', 'Gender', 'Age', 'Popularity', 'Followers'] as const).map((key, colIndex) => {
                const content = guesses[rowIndex]?.guess_info?.[key] || '';
                const bgClassSafe = (bg: string): string => {
                    const allowed = {
                        "bg-gray-600": "bg-gray-600",
                        "bg-green-600": "bg-green-600",
                        "bg-yellow-500": "bg-yellow-500",
                    };
                    return allowed[bg as keyof typeof allowed] || "";
                    };

                const shouldFlip = rowIndex === flippedRow;

                return (
                    <div
                    key={colIndex}
                    className="perspective-1000 w-full h-20 border-2 border-gray-800 rounded-s relative">
                        <div
                            className={`w-full h-full transition-transform duration-1000 transform-style-3d relative ${
                            shouldFlip ? 'rotate-x-90' : ''
                            }`}
                        >
                            <div className={`absolute w-full h-full backface-hidden flex items-center justify-center font-bold ${bgClassSafe(guesses[rowIndex]?.comparisons[key])} `}>
                            {content}
                            </div>
                            <div className="absolute w-full h-full backface-hidden transform flex items-center justify-center"></div>
                        </div>
                    </div>
                );
                })}
            </div>
            ))}

            <div className="flex items-center justify-center">
                <div className="grid">
                    <div className="relative">
                        <input
                        type="text"
                        placeholder="Enter name..."
                        value={inputValue}
                        onChange={handleInputChange}
                        className="box border-2 border-gray-600 rounded-md text-2xl m-1 duration-500 text-center w-2xl focus:outline-none max-w-[98vw] focus:border-gray-200 transition-all"
                        onFocus={() => setVisible(true)}
                        onBlur={() => setTimeout(() => setVisible(false), 500)}
                        onKeyDown={handleKeyDown}
                        />
                        
                        <div className={`
                            absolute z-10 mt-1 w-full bg-[#171717] shadow-lg rounded-md duration-300
                            transition-all origin-top no-scrollbar
                            ${isVisible && !win ? 
                                'opacity-100 scale-y-100' : 
                                'opacity-0 scale-y-95 pointer-events-none'
                            }
                            overflow-y-auto max-h-50
                            border border-gray-600
                        `}>
                            <ul className="divide-y divide-gray-600">
                            {items
                                .filter(item => item.toUpperCase().includes(inputValue.toUpperCase()))
                                .map((item, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handleItemClick(item)}
                                    className="px-4 py-2 hover:bg-gray-200 hover:text-[#171717] cursor-pointer transition-colors duration-500 max-w-[98vw]"
                                >
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button onClick={submit} className="box border-2 border-gray-600 rounded-md text-2xl font-bold m-1 duration-500 text-center w-2xl hover:bg-gray-200 hover:text-[#121213] hover:border-gray-200 max-w-[98vw]">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
