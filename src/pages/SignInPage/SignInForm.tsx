import { useForm, SubmitHandler } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase-config';
import { IFormInput } from '../../components/Hook-Form'; // Import FormContext and IFormInput

interface SignInProps {
  handleSignIn: (data: IFormInput) => void;
}

export function SignInForm({ handleSignIn }: SignInProps) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    console.log('User signed in with:', data);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      handleSignIn(data);
    } catch (error) {
      console.error('Sign in error:', error);
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
        Sign In
      </button>
    </form>
  );
}
