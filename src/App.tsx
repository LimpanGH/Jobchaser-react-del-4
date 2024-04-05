import { Jobs } from './pages/Home/Jobs';
import { SearchField } from './pages/Home/SearchField';
import { NavBar } from './components/NavBar';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useOutlet,
} from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
// import SignInForm from './pages/SignInPage/SignInPage';
// import SignUpForm from './pages/SignUpPage/SignUpPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Dashboard from './pages/Dashboard/Dashboard';

// import { getData } from './GetData';

export function App() {
  return (
    <BrowserRouter basename='Jobchaser-react'>
      <div className='flex flex-col items-center max-w-screen-xl mx-auto '>
        <NavBar />
        <Routes>
          <Route path='/hello' element={<Layout />}>
            <Route index element={<div>child index</div>} />
            <Route path='world' element={<div>child route path=world</div>} />
          </Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          {/* <Route path='/signin' element={<SignInPage />} /> */}
          {/* <Route path='/dashboard' element={<ProtectedRoute />}> */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route
            path='/jobs'
            element={
              <>
                {/* <SearchField /> */}
                <Jobs />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const Layout = () => {
  const outlet = useOutlet();
  return (
    <div>
      <h1 className='text-3xl'>Layout componenet</h1>
      <div className='p-8 shadow-lg'>
        Here is the outlet:f
        {outlet}
      </div>
    </div>
  );
};
