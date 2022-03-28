import { createContext, useReducer, useCallback } from "react";
import { useFetch  } from "../hooks/useFetch";

export const CountriesContext = createContext()

const countriesReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_COUNTRIES':
      return { ...state, countries: action.payload }
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload }
    case 'GET_COUNTRIES':
      return { ...state, countries: action.payload, defaultState: action.payload }
    default: 
      return state
  }
}

export function CountriesProvider({ children }) {

  const initialState = {
    countries: [],
    searchTerm: '',
    defaultState: []
  }

  const [state, dispatch] = useReducer(countriesReducer, initialState)

  // To prevent console warning, memoize with useCallback before passing into useFetch and thus into useEffect
  const getCountries = useCallback((countries) => {
    dispatch({ type: 'GET_COUNTRIES', payload: countries })
  }, [])

  const { data, isPending, error } = useFetch('https://restcountries.com/v3.1/all', getCountries)

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm })
  }


  const filterCountries = (countries, target) => {
    if(!target.classList.contains('option')) return false
    const { defaultState } = state
    const filterParam = target.textContent
    if (filterParam === 'All' ) {
      countries = defaultState.map(country => {
        return country
      })
    } else {
        countries = defaultState.filter(country => {
        return country.region === filterParam
      })
    }
    
    dispatch({ type: 'FILTER_COUNTRIES', payload: countries })
  }

  return (
    <CountriesContext.Provider value={{ ...state, getCountries, setSearchTerm, filterCountries, data, isPending, error }}>
      {children}
    </CountriesContext.Provider>
  )

}