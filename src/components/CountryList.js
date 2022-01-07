import { useCountries } from '../hooks/useCountries'

// STYLES
import './CountryList.css'


export default function CountryList() {
  const { countries } = useCountries()


  return (
    <div className="country-list">
      {countries.map(country => (
        <div className="country-card" key={country.name.common}>
          <div className="flag-container">
            <img src={country.flags.png} alt="country flag" />
          </div>
          <div className="info-container">
            <h3>{country.name.common}</h3>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
          </div>
      </div>
      ))}
    </div>
  )
}
 