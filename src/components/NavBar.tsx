// NavBar.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './ModalAccount';
import { HandleSignOut } from '../Firebase/SignOut';

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

  const svgUrl = isSignedIn ? './public/SVG/UserGreen.svg' : './public/SVG/User.svg';

  return (
    <div className='flex flex-col items-center justify-between w-full bg-blue-100'>
      <div className='flex items-center justify-between w-full px-8 py-4'>
        <div>
          <Link to='/home' className='text-3xl'>
            Home
          </Link>
          <Link className='ml-4 text-3xl' to='/jobs'>
            Jobs
          </Link>
        </div>
        <div className='flex items-center text-xl text-blue-600'>
          <img
            src={svgUrl}
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
            onClick={handleOpenModal}
            alt='User Icon'
          />
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
