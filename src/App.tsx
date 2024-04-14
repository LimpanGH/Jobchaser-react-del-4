import { useState } from 'react';
import { Jobs } from './components/Jobs';
import { SearchField } from './pages/Home/SearchField';
import { NavBar } from './components/NavBar';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';

import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useOutlet } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import { FormProvider } from './components/Hook-Form';

export function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <BrowserRouter basename='Jobchaser-react'>
      <div className='flex flex-col items-center max-w-screen-xl mx-auto '>
        <NavBar isSignedIn={isSignedIn} handleSignIn={handleSignIn} />
        <FormProvider>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/signin' element={<SignInPage handleSignIn={handleSignIn} />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </FormProvider>
      </div>
    </BrowserRouter>
  );
}
