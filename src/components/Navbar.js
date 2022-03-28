import { Link } from 'react-router-dom'
import { useMode } from '../hooks/useMode';

// STYLES
import './Navbar.css'

// COMPONENTS
import ModeSelector from './ModeSelector'

// IMAGES
import Earth from '../assets/icons8-planet-earth-47.png'
import Info from '../assets/icons8-info-24.png'

export default function Navbar() {
  const { mode, showInfo, setShowInfo } = useMode()

  const toggleDisplay = () => {
    showInfo ? setShowInfo(false) : setShowInfo(true)
  }

  return ( 
    <nav className={`navbar ${mode}`}>
      {/* <Link to="/rest-countries-api" onClick={() => window.location.reload()} style={{ textDecoration: 'none', color: 'inherit' }}> */}
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3><img id="earth" src={Earth} alt="planet earth" />Where in the world?</h3>
      </Link>
      <img id="info-btn" src={Info} alt="info" onClick={() => {toggleDisplay()}}></img>
      <ModeSelector />
    </nav>
   );
}
 