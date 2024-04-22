// Imports
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HandleSignOut } from './Firebase/SignOut';
import { auth } from './Firebase/firebase-config';
import { Footer } from './components/Footer';
import { FormProvider } from './components/Hook-Form';
import { Jobs } from './components/Jobs';
import { NavBar } from './components/NavBar';
import HomePage from './pages/Home/HomePage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';

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

  const handleSignOut = async () => {
    try {
      await HandleSignOut();
      setIsSignedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <BrowserRouter basename='Jobchaser/'>
      <div className='flex flex-col items-center min-h-screen '>
        <div className='flex-grow '>
          <NavBar
            isSignedIn={isSignedIn}
            handleSignIn={handleSignIn}
            HandleSignOut={handleSignOut}
          />
          <FormProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/jobs' element={<Jobs />} />
              <Route path='/signin' element={<SignInPage handleSignIn={handleSignIn} />} />
              <Route path='/signup' element={<SignUpPage />} />
              {/* If user misspells the url, they will be sent back to Home */}
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </FormProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
