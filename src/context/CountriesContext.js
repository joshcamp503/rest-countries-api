import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const CountriesContext = createContext()

// const countriesReducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE_COUNTRIES':
//       return { ...state, countries: action.payload }
//     default: 
//       return state
//   }
// }

export function CountriesProvider({ children }) {
  const { data:countries, isPending, error } = useFetch('https://restcountries.com/v3.1/all')
  

  // const [state, dispatch] = useReducer(countriesReducer, {
  //   countries: 'countries'
  // })

  // const changeCountries = (countries) => {
  //   dispatch({ type: 'CHANGE_COUNTRIES', payload: countries })
  // }

  return (
    <CountriesContext.Provider value={{ countries, isPending, error }}>
      {children}
    </CountriesContext.Provider>
  )

}