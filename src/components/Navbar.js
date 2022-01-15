import { Link } from 'react-router-dom'
import { useMode } from '../hooks/useMode';

// styles
import './Navbar.css'

// COMPONENTS
import ModeSelector from './ModeSelector'

export default function Navbar() {
  const { mode } = useMode()

  return ( 
    <nav className={`navbar ${mode}`}>
      <Link to="/" onClick={() => window.location.reload()} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>Where in the world?</h3>
      </Link>
      <ModeSelector />
    </nav>
   );
}
 