import { useNavigate, useParams } from 'react-router-dom'
import { useCountries } from '../../hooks/useCountries'
import { useMode } from '../../hooks/useMode'

// STYLES
import './Country.css'

// COMPONENTS
import CountryDetails from './CountryDetails'

export default function Country() {
  const { mode } = useMode()
  const navigate = useNavigate()
  const { id } = useParams()
  const { countries, isPending, error } = useCountries()
  const [ country ] = countries.filter(country => {
    return country.name.common === id
  })

  console.log(country)

  const handleClick = (e) => {
    if (e.target.textContent === 'Back') {
      navigate(-1)
    } else {
      navigate(`/country/${e.target.textContent}`)
    }
  }

  return (
    <div className={`country-page ${mode}`}>
      <div className="country-page-content">
        <button className="back-btn grow" onClick={handleClick}><i className="fas fa-angle-double-left"></i><span>Back</span></button>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading"> Loading...</p>}
        {country && <CountryDetails country={country} countries={countries} handleClick={handleClick}/>}
      </div>
    </div>
  )
}
