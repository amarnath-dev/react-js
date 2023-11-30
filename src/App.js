import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  let [currFact, setCurrFact] = useState("");

  useEffect(() => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
      const excuse = res.data[0]?.excuse || "No excuse are there";
      setCurrFact(excuse)
    });
  }, []);

  const getNewExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
      const excuse = res.data[0]?.excuse || "No Excuse are there";
      setCurrFact(excuse)
    })
  }

  return (
    <div className="App" >
      <div>
        <button onClick={getNewExcuse}>Generate Execus</button>
        <p>{currFact}</p>
      </div>
    </div>
  );
  
}

export default App
