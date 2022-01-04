import { useCountries } from '../hooks/useCountries';

// Components
import CountryList from '../components/CountryList'
import Search from '../components/Search';

export default function Home() {
  const { countries, isPending, error } = useCountries()


  return ( 
    <div className="home">
      <Search />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"> Loading...</p>}
      {countries && <CountryList countries={countries} />}
    </div>
  );
}
