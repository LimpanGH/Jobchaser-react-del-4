// Hook-Form.tsx
import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';
// import { useFormField } from './UseFormField';



export const FormContext = React.createContext<any>(null);

 export interface IFormInput {
  email: string;
  password: string;
  // firstName: string;
  // lastName: string;
  // age: number;
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<IFormInput>();
  return <FormContext.Provider value={methods}>{children}</FormContext.Provider>;
}

export function useFormSubmitHandler<T = any>(onSubmit: SubmitHandler<T>) {
  const methods = useContext(FormContext);
  return methods?.handleSubmit(onSubmit);
}