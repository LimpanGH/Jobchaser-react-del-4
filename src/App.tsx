import { Jobs } from './components/Jobs';
import { SearchField } from './pages/Home/SearchField';
import { NavBar } from './components/NavBar';
import SignInPage from './pages/SignInPage/SignInPage';

import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useOutlet } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';

export function App() {
  return (
    <BrowserRouter basename='Jobchaser-react'>
      <div className='flex flex-col items-center max-w-screen-xl mx-auto '>
        <NavBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/jobs' element={<Jobs />} />
          {/* <Route path='/signin' element={<SignInPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
