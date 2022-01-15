import { useCountries } from '../hooks/useCountries';
import { useMode } from '../hooks/useMode';

// Components
import CountryList from '../components/CountryList'
import Search from '../components/Search';

export default function Home() {
  const { data, isPending, error } = useCountries()
  const { mode } = useMode()

  return ( 
    <div className={`home ${mode}`}>
      <Search />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"> Loading...</p>}
      {data && <CountryList />}
    </div>
  );
}
