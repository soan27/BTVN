import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [name, setname] = useState("Xoan");
  const nameFromStore = useSelector((state) => state.nameReducer);
  console.log(nameFromStore);
  return <div className="App">hello</div>;
}

export default App;
