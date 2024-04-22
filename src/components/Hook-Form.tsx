// Hook-Form.tsx
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const FormContext = React.createContext<any>(null);

export interface IFormInput {
  email: string;
  password: string;
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<IFormInput>();
  return <FormContext.Provider value={methods}>{children}</FormContext.Provider>;
}

export function useFormSubmitHandler<T = any>(onSubmit: SubmitHandler<T>) {
  const methods = useContext(FormContext);
  return methods?.handleSubmit(onSubmit);
}
