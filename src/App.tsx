import { Jobs } from './pages/Home/Jobs';
import { SearchField } from './pages/Home/SearchField';
import { NavBar } from './components/NavBar';

// import { getData } from './GetData';

export function App() {
  return (
    <>
      <div className='container-wrapper'>
        <NavBar />
        <SearchField />
        <Jobs />
      </div>
    </>
  );
}
