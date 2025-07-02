"use client"
import NavBar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0";
import dynamic from "next/dynamic";
import 'chart.js/auto';
import { useEffect, useState } from "react";

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
})

export default function Stats() {

  const {user} = useUser()
  
  const metrics = ["PLAYED", "WIN %"];
  const [wins, setWins] = useState(0);
  const [total, setTotal] = useState(0);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
      const getStats = async (playerId : string | undefined) => {
          if (playerId){
              try {
                const response = await fetch(`http://localhost:5050/api/stats?param=${playerId}`);
                const result = await response.json();
                setGuesses(Object.values(result.guessDistribution));
                setWins(Math.round(result.wins/result.totalGames*100));
                setTotal(result.totalGames);
              } catch {
                return;
              }
          }
      }
      if (user){
        getStats(user?.sub);
      }
  }, [user?.sub, user])

  const data = {
    labels: [1,2,3,4,5,6],
    datasets: [{
      label: 'guesses',
      data: user ? guesses : [0,0,0,0,0,0],
      backgroundColor:["#006400", "#228B22", "#90EE90", "#FFFF99", "#FFD700", "#FFA500"],
      borderWidth: 1,
      hoverBackgroundColor:"#ffffff"
    }]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false 
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
  
  return (
    <div className="grid">
      <header>
        <NavBar/>
      </header>
      <div className="flex items-center justify-center max-w-full max-h-full p-4 gap-4 mt-[10vh]">
        <div className="w-[90vw] h-[60vh] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center m-10">
            <h1 className="text-2xl font-bold m-3">STATISTICS</h1>
            <div className="grid grid-cols-2 text-center text-xl">
              <h1 className="font-bold">{total}</h1>
              <h1 className="font-bold">{wins}</h1>
              {metrics.map((name, i)=> (
                <h2 key={i} className="mx-4">{name}</h2>
              ))}
            </div>
          </div>
          
          {user ? (
          <h1 className="text-2xl font-bold m-2">GUESS DISTRIBUTION</h1>
        ) : (
          <a 
            href="/api/auth/login" 
            className="box border-2 border-gray-600 rounded-md text-2xl font-bold m-1 duration-500 text-center w-full max-w-[98vw] p-4 hover:bg-gray-200 hover:text-[#121213] hover:border-gray-200"
          >
            LOGIN TO SAVE YOUR PROGRESS
          </a>
        )}
          <Bar 
            data={data} 
            options={options}
          />
        </div>
      </div>
    </div>
  );
}
