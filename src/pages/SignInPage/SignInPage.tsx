import { SignInForm } from '../../components/Hook-Form';

export function SignInPage({ handleSignIn }: { handleSignIn: (data: any) => void }) {
  return (
    <div>
      <h1 className='text-4xl mt-7 mb-7'>Sign In</h1>

      <SignInForm handleSignIn={handleSignIn} />
    </div>
  );
}
