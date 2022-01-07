import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return ( 
    <div className="App">
        <Navbar />
        <Home />
    </div>
  )
}

export default App;
