import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './ModalAccount';
import {handleSignOut} from '../App'

interface NavBarProps {
  isSignedIn: boolean;
  handleSignIn: (userData: any) => void;
}

export function NavBar({ isSignedIn, handleSignIn }: NavBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex items-center justify-center w-full gap-8 bg-blue-100'>
      <Link to='/home' className='text-3xl '>
        Home
      </Link>
      <Link className='text-3xl ' to='/jobs'>
        Jobs
      </Link>

      <div className='text-xl text-blue-600'>
        {isSignedIn ? (
          <span>Signed In</span>
        ) : (
          <span onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
            Sign In
          </span>
        )}
      </div>
      <div className='flex items-center text-xl text-blue-600'>
        <img
          src='./src/assets/SVG/Hitta IT-jobb! Utvecklare, IT-support, säkerhet, projektledare mm-7.svg'
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          onClick={handleOpenModal}
        />
      </div>
      
      <button onClick={handleSignOut}>Sign Out</button>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
      
    </div>
  );
}
