// NavBar.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './ModalAccount';

interface NavBarProps {
  isSignedIn: boolean;
  handleSignIn: (userData: any) => void;
  HandleSignOut: () => void; // Add handleSignOut prop
}

export function NavBar({ isSignedIn, HandleSignOut, handleSignIn }: NavBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col justify-between w-screen bg-blue-100'>
      <div className='flex justify-end gap-6 px-8 py-4 dw-full'>
        <div>
          <Link to='/' className='text-3xl'>
            Home
          </Link>
          <Link className='ml-4 text-3xl' to='/jobs'>
            Jobs
          </Link>
        </div>

        <div className='flex items-center text-xl text-blue-600'>
          <button onClick={handleOpenModal}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`${isSignedIn ? 'fill-green-600' : 'fill-black'}`}
            >
              <path d='M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z' />
            </svg>
          </button>

          {isSignedIn && (
            <button onClick={HandleSignOut} className='ml-4'>
              Sign Out
            </button>
          )}
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
