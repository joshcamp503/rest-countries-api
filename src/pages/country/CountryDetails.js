// STYLES
import "./CountryDetails.css"

export default function CountryDetails({ country, countries, handleClick }) {

  // DISTILL NATIVE NAMES OBJ INTO A SINGLE ARRAY
  const nativeNameObj = Object.entries(country.name.nativeName)
  const nativeNames = nativeNameObj.map(lang => {
    return lang[1].common
  })
  // console.log(nativeNames)

  // DISTILL CURRENCIES OBJ INTO A SINGLE ARRAY
  const getCurrencyNames = () => {
    if (!country.currencies) return false
    const currenciesArray = Object.entries(country.currencies)
    return currenciesArray.map(curr => {
      return curr[1].name
    })
  }
  const currencies = getCurrencyNames()
  // console.log(currencies)


  // DISTILL LANGUAGES OBJ INTO A SINGLE ARRAY
  const languagesObj = Object.entries(country.languages)
  const languages = languagesObj.map(lang => {
    return lang[1]
  })
  // console.log(languages)

  // FILTER BORDER COUNTRIES OUT OF COUNTRIES OBJ AND PLACE NAMES INTO A SINGLE ARRAY
  const borderCountrySymbols = country.borders
  const borderCountries = countries.filter(country => {
    if(!borderCountrySymbols) return false
    return borderCountrySymbols.includes(country.cca3)
  })
  const borderCountryNames = borderCountries.map(country => {
    return country.name.common
  })

  return (
    <div className="country-details">
      <div className="flag-container">
        <img src={country.flags.png} alt="country flag" />
      </div>
      <div className="info-container">
        <h3>{country.name.common}</h3>
        <div className="demographics-container">
          <div className="general-info">
            <p>Native Name: <span>{nativeNames.join(', ')}</span></p>
            <p>Population: <span>{country.population}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Sub Region: <span>{country.subregion}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
          </div>
          <div className="technical-info">
            <p>Top Level Domain: <span>{country.tld}</span></p>
            <p>Currencies: {currencies && <span>{currencies.join(', ')}</span>}</p>
            <p>Languages: <span>{languages.join(', ')}</span></p>
          </div>
        </div>
        <div className="border-countries">
          <h4>Border Countries: </h4>
          <div className="border-countries-container">
            {borderCountryNames.map((country, index) => (
              <button className="grow" key={index} onClick={handleClick}><p>{country}</p></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
