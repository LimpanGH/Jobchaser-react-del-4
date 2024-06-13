// HandleSignIn.tsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface SignInData {
  email: string;
  password: string;
}

export function HandleSignIn(data: SignInData) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, data.email, data.password);
}
