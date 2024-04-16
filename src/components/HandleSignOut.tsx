// HandleSignOut.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    
  } catch (error) {
    console.error('Error signing out:', error);
  }
};