import { useContext } from 'react';
import { FormContext } from './Hook-Form'; // Adjust the path if necessary

export function useFormField(fieldName: string) {
  const methods = useContext(FormContext);
  return methods?.register(fieldName);
}
