import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export const useCountries = () => {
  const context = useContext(CountriesContext)

  if (context === undefined) {
    throw new Error('useCountries() must be used inside a CountriesProvider')
  }

  return context
}