import "./App.css";
import { Footer } from "./Components/Footer";
import { FromContainer } from "./Components/FromContainer";
import HomeScreen from "./Screen/HomeScreen";

function App() {
  return (
    <FromContainer>
      <HomeScreen />
      <Footer />
    </FromContainer>
  );
}

export default App;
