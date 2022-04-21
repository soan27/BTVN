import "./App.css";
import { useState, useEffect } from "react";
import Header from "./GameRandom/Header";
import Body from "./GameRandom/Body";

function App() {
  const [randomNumber, setrandomNumber] = useState();

  useEffect(() => {
    RandomFunction();
  }, []);

  const RandomFunction = () => {
    let random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
    setrandomNumber(random);
  };
  return (
    <div className="App">
      <Header randomNumber={randomNumber} />
      <Body />
    </div>
  );
}

export default App;
