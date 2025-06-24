import NavBar from "./components/Navbar";
import GuessGrid from "./components/GuessGrid";

export default function Home() {

  return (
    <div className="grid">
      <header>
        <NavBar/>
      </header>
      <div className="flex items-center justify-center">
        <GuessGrid/>
        
      </div>
      

    </div>
  );
}
