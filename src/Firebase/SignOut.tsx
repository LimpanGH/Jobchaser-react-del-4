// import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';

// // In order to implement any of the Firebase Authentication methods, first we need to create an instance of an authentication object.
// const auth = getAuth();

// // Typically, you will want to call the signOut() method when a user clicks the sign-out button to sign out their current authenticated session after successfully signing in.
// <button id='signOutBtn'>Sign out</button>;

// // Next, create a DOM reference for the sign-out button element.
// const signOutBtn = document.getElementById('signOutBtn');

// // Then attach a click event with the callback function signOutButtonPressed to the sign-up button.
// const signOutButtonPressed = (e) => {
//   e.preventDefault();
//   console.log('Sign out Button Pressed');
// };
// signOutBtn.addEventListener('click', signOutButtonPressed);

// // Call signOut() Method Inside the signOutButtonPressed function, call the signOut() method.
// const signOutButtonPressed = (e) => {
//   e.preventDefault();
//   signOut();
// };

// // The signOut() method takes a single argument which is the authentication object that I’ve declared above.
// const signOutButtonPressed = (e) => {
//   e.preventDefault();
//   signOut(auth);
// };

// // The signOut() method is an asynchronous method that returns a promise which can be either fulfilled or rejected. So add the await/async keywords to it.
// const signOutButtonPressed = async (e) => {
//   e.preventDefault();
//   await signOut(auth);
// };

// // To capture any errors, wrap the signOut() method with a try-catch block.
// try {
//   await signOut(auth);
//   console.log('User Signed Out Successfully!');
// } catch (error) {
//   console.log(error.code);
// }


// ------------------------------

// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebase/firebase-config';

// export const HandleSignOut = async () => {
//   try {
//     await signOut(auth);
//     console.log('User Signed Out Successfully!');
//   } catch (error) {
//     console.error('Error signing out:', error);
//   }
// };
// -------------------

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

export const HandleSignOut = async () => {
  try {
    await signOut(auth);
    console.log('User Signed Out Successfully!');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
