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
import { handleSignOut } from '../src/components/HandleSignOut';
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useOutlet } from 'react-router-dom';
import { Footer } from './components/Footer';

export function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  // useEffect(() => {  
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setIsSignedIn(!!user);
  //   });
  //   return () => unsubscribe();
  // }, []);
  
  
  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  // };

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
      <div className='flex flex-col items-center mx-auto max-w-sgcreen-xl '>
        {/* <NavBar isSignedIn={isSignedIn} handleSignIn={handleSignIn} /> */}
        <NavBar isSignedIn={isSignedIn} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
        <FormProvider>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/signin' element={<SignInPage handleSignIn={handleSignIn} />} />
            

            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </FormProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


// export const handleSignOut = async () => {
//   try {
//     await signOut(auth);
//     setIsSignedIn(false); // Update state to reflect sign-out
//   } catch (error) {
//     console.error('Error signing out:', error);
//   }
// };


// ________________________________________________

// App.tsx
// import React, { useState, useEffect } from 'react';
// import { handleSignOut } from '../src/components/HandleSignOut';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { NavBar } from './components/NavBar';
// import { Jobs } from './components/Jobs';
// import HomePage from './pages/Home/HomePage';
// import { FormProvider } from './components/Hook-Form';
// import { Footer } from './components/Footer';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { auth } from './Firebase/firebase-config';

// export function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
  
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsSignedIn(!!user);
//     });
//     // Set initial state here
//     setIsSignedIn(false);
//     return () => unsubscribe();
//   }, []);

//   const handleSignIn = () => {
//     setIsSignedIn(true);
//   };

//   return (
//     <BrowserRouter basename='Jobchaser-react'>
//       <div className='flex flex-col items-center max-w-screen-xl mx-auto'>
//         <NavBar isSignedIn={isSignedIn} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />
//         <FormProvider>
//           <Routes>
//             <Route path='/home' element={<HomePage />} />
//             <Route path='/jobs' element={<Jobs />} />
//           </Routes>
//         </FormProvider>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }
