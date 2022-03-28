import { Link } from 'react-router-dom'
import { useCountries } from '../hooks/useCountries'
import { useMode } from '../hooks/useMode'

// STYLES
import './CountryList.css'


export default function CountryList() {
  const { countries, searchTerm } = useCountries()
  const { mode } = useMode()
  console.log(countries)

  const listCountries = (searchTerm) => countries.filter(country => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  })


  return (
    <div className="country-list">
      {listCountries(searchTerm).map((country, index) => (
        <div className={`country-card ${mode} grow`} key={index}>
        <Link to={`/rest-countries-api/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="flag-container">
            <img src={country.flags.png} alt="country flag" />
          </div>
          <div className="info-container">
            <h3>{country.name.common}</h3>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
          </div>
        </Link>
        </div>
      ))}
    </div>
  )
}
 