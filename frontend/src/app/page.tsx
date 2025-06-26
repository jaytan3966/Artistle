import NavBar from "./components/Navbar";
import GuessGrid from "./components/GuessGrid";

export default function Home() {

  return (
    <div className="grid">
      {/* <a href="/auth/login">Login</a>
      <a href="/auth/logout">Logout</a> */}
      <header>
        <NavBar/>
      </header>
      <div className="flex items-center justify-center">
        <GuessGrid/>
      </div>
      

    </div>
  );
}
