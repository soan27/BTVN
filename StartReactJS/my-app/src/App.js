import "./App.css";
import ComponentParent from "./Component/renderCp";
import Clock from "./Component/Clock";
import { useState } from "react";

function App() {
  const [stateClock, setstateClock] = useState(true);
  return (
    <div className="App">
      <ComponentParent />
      {stateClock ? <Clock /> : null}
      <button onClick={() => setstateClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
