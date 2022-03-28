import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Country from "./pages/country/Country";
import { useMode } from "./hooks/useMode";

function App() {
  const { mode } = useMode()

  return ( 
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/rest-countries-api" element={<Home />} />
          <Route path="/rest-countries-api/country/:id" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;