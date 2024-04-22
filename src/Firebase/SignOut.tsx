import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

export const HandleSignOut = async () => {
  try {
    await signOut(auth);
    console.log('User Signed Out Successfully!');
    return 'success';
  } catch (error) {
    console.error('Error signing out:', error);
    return error;
  }
};
