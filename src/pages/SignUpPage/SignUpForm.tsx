import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase-config';
import { IFormInput } from '../../components/Hook-Form'; // Import FormContext and IFormInput

export function SignUpForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log('Signed up with theese details:', data);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      // More actions after successful sign up?
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
          Email
        </label>
        <input
          {...register('email')}
          id='email'
          type='email'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='password'>
          Password
        </label>
        <input
          {...register('password')}
          id='password'
          type='password'
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
