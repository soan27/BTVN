import { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
function RandomNumber() {
  const [randomNumber, setrandomNumber] = useState();
  const [inputValue, setinputValue] = useState();
  const [count, setcount] = useState(0);
  const [message, setmessage] = useState();
  const [correct, setCorrect] = useState(false);
  const [Data, setData] = useState(2);
  useEffect(() => {
    randomFunction();
  }, [correct]);

  useEffect(() => {
    if (count > 7) {
      alert("Bạn đã thua");
      newGame();
    }
  }, [count]);

  const randomFunction = () => {
    let random = Math.floor(Math.random() * 100 + 1);
    setrandomNumber(random);
  };
  const onchangeValue = (event) => {
    setinputValue(parseInt(event.target.value));
  };

  const guess = () => {
    setcount(count + 1);
    if (inputValue === randomNumber) {
      setmessage("Chuc mung ban doan dung roi");
      setCorrect(true);
      setinputValue(0);
    } else {
      if (inputValue > randomNumber) {
        setmessage("So ban nhap qua lon");
      }
      if (inputValue < randomNumber) {
        setmessage("So ban nhap qua nho");
      }
    }
  };
  const newGame = () => {
    randomFunction();
    setinputValue(0);
    setcount(0);
    setmessage();
  };
  const wrapChildFc = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <Header
        correct={correct}
        randomNumber={randomNumber}
        wrap={Data}
        wrapChild={wrapChildFc}
      />

      <Body
        newGame={newGame}
        count={count}
        onchangeValue={onchangeValue}
        guess={guess}
        message={message}
      />
      {/* <div
        className="jumbotron text-center"
        style={{ backgroundColor: correct ? "green" : "gray" }}
      >
        <h1>Gettig random number</h1>
        <p>
          Toi da chon mot so random trong khoang tu 1 den 100, ban co the doan
          duoc
        </p>
        {randomNumber}
        <p></p>
      </div> */}
      {/* <div className="body">
        <button onClick={newGame}>New game</button>
        <hr />
        <p className="font-weight-bold">So lan ban doan la: {count}</p>
        <p className="font-weight-bold">So ban doan la</p>
        <input
          value={inputValue}
          type="number"
          name=""
          id=""
          onChange={onchangeValue}
        />
        <button className="btn-success" onClick={guess}>
          Doan
        </button>
        <p>{message}</p>
      </div> */}
    </div>
  );
}

export default RandomNumber;
