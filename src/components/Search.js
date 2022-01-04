import { useState } from 'react'

// Styles
import './Search.css'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  const toggleDropdown = (e) => {
    const optionsMenu = document.querySelector('.options-menu')
    const caret = document.querySelector('.select-menu i')
    optionsMenu.classList.toggle('active')
    caret.classList.toggle('fa-angle-down')
    caret.classList.toggle('fa-angle-up')
  }

  return (
    <div className="search">
      <form className="search-form">
        <div className="search-bar-container">
          <i className="fas fa-search"></i>
          <input 
            className="search-bar" 
            id="search-bar" type="search"  
            placeholder='Search for a country...'
            onChange={(e) => {
              setSearchTerm(e.target.value)
              console.log(searchTerm)
            }}
          />
        </div>
        <div className="select-menu" onClick={toggleDropdown} >
          <p>Filter by Region</p>
          <i className="fas fa-angle-down"></i>
          <div className="options-menu-container">
            <ul className="options-menu">
              <li className="option">Africa</li>
              <li className="option">America</li>
              <li className="option">Asia</li>
              <li className="option">Europe</li>
              <li className="option">Oceania</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}

