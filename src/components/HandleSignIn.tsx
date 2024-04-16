// HandleSignIn.tsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function HandleSignIn(data) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, data.email, data.password);
}
