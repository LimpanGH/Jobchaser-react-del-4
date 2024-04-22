// Imports
import React, { useState, useEffect } from 'react';
import { Jobs } from './components/Jobs';
import { NavBar } from './components/NavBar';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/Home/HomePage';
import { FormProvider } from './components/Hook-Form';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase-config';
import { signOut } from 'firebase/auth';
import { HandleSignOut } from './Firebase/SignOut';
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useOutlet } from 'react-router-dom';
import { Footer } from './components/Footer';

export function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });
    // Set initial state here
    setIsSignedIn(false);
    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <BrowserRouter basename='Jobchaser-react'>
      {/* <div className='flex flex-col items-center mx-auto max-w-sgcreen-xl '> */}
      <div className='flex flex-col items-center min-h-screen'>
        <div className="flex-grow">
        <NavBar isSignedIn={isSignedIn} handleSignIn={handleSignIn} HandleSignOut={HandleSignOut}/>
        <FormProvider>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/signin' element={<SignInPage handleSignIn={handleSignIn} />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </FormProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


// ----------------

