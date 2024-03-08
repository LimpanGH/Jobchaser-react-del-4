import { Jobs } from './Jobs';
import { SearchField } from './SearchField';
import { NavBar } from './NavBar';

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
