import { useMode } from "../hooks/useMode"

// STYLES
import './ModeSelector.css'

export default function ModeSelector() {
  const { changeMode, mode } = useMode()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="mode-selector">
      <button onClick={toggleMode}>
        <i className="far fa-moon" style={{ color: 'hsl(200, 15%, 8%)', filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}></i>
        Dark Mode
      </button>
    </div>
  )
}
