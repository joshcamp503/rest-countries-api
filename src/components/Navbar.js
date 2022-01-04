// styles
import './Navbar.css'

export default function Navbar() {

  const toggleDarkMode = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-mode')
  }

  return ( 
    <nav className="navbar">
      <h3>Where in the world?</h3>
      <button onClick={toggleDarkMode}><i className="far fa-moon"></i>Dark Mode</button>
    </nav>
   );
}
 