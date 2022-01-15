import { useCountries } from '../hooks/useCountries'
import { useMode } from '../hooks/useMode'

// Styles
import './Search.css'

export default function Search() {
  const { countries, searchTerm, setSearchTerm, filterCountries} = useCountries()
  const { mode } = useMode()

  const toggleDropdown = (e) => {
    const optionsMenu = document.querySelector('.options-menu')
    const caret = document.querySelector('.select-menu i')
    optionsMenu.classList.toggle('active')
    caret.classList.toggle('fa-angle-down')
    caret.classList.toggle('fa-angle-up')
  }

  const changeFilterTitle = (e) => {
    e.preventDefault()
    const filterTitle = document.querySelector('.filter-title')
    filterTitle.textContent = e.target.textContent
  }



  return (
    <div className={`search ${mode}`}>
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <div className="search-bar-container grow">
          <i className="fas fa-search"></i>
          <input 
            className="search-bar" 
            id="search-bar" type="search"  
            placeholder='Search for a country...'
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
        <div className="select-menu" onClick={toggleDropdown} >
          <p className="filter-title">Filter by Region</p>
          <i className="fas fa-angle-down"></i>
          <div className="options-menu-container">
            <ul className="options-menu" onClick={(e) => {
              filterCountries(countries, e.target)
              changeFilterTitle(e)
              }}>
              <li className="option">All</li>
              <li className="option">Africa</li>
              <li className="option">Americas</li>
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

