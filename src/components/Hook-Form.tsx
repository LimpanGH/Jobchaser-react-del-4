import React, { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const FormContext = React.createContext<any>(null);

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm<IFormInput>();
  return <FormContext.Provider value={methods}>{children}</FormContext.Provider>;
}

export function useFormField(fieldName: string) {
  const methods = useContext(FormContext);
  return methods?.register(fieldName);
}

export function useFormSubmitHandler<T = any>(onSubmit: SubmitHandler<T>) {
  const methods = useContext(FormContext);
  return methods?.handleSubmit(onSubmit);
}

// My Sign-in form ----------------------
export function SignInForm({ handleSignIn }: { handleSignIn: (data: IFormInput) => void }) {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    handleSignIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='firstName'>
          First Name
        </label>
        <input
          {...register('firstName', { required: true, maxLength: 20 })}
          id='firstName'
          type='text'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='lastName'>
          Last Name
        </label>
        <input
          {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
          id='lastName'
          type='text'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='age'>
          Age
        </label>
        <input
          {...register('age', { required: true, min: 18, max: 99 })}
          id='age'
          type='number'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Sign In
      </button>
    </form>
  );
}

// My Sign-up form ----------------------
export function SignUpForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='firstName'>
          First Name
        </label>
        <input
          {...register('firstName', { required: true, maxLength: 20 })}
          id='firstName'
          type='text'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='lastName'>
          Last Name
        </label>
        <input
          {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
          id='lastName'
          type='text'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='age'>
          Age
        </label>
        <input
          {...register('age', { required: true, min: 18, max: 99 })}
          id='age'
          type='number'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Sign Up
      </button>
    </form>
  );
}
