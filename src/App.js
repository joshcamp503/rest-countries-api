import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Country from "./pages/country/Country";
import InfoModal from "./components/InfoModal";

// HOOKS
import { useMode } from "./hooks/useMode";

function App() {
  const { mode, showInfo, setShowInfo } = useMode()

  return ( 
    <div className={`App ${mode}`}>
      <BrowserRouter basename="/where-in-the-world">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
        {showInfo && <InfoModal setShowInfo={setShowInfo}/>}
      </BrowserRouter>
    </div>
  )
}

export default App;
