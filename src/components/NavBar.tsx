import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './ModalAccount';

export function NavBar() {
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
      {/* <Link className='text-xl text-blue-600 ' to='/signup'>
        Signup
      </Link> */}

      <div className='flex items-center text-xl text-blue-600'>
        <img
          src='./src/assets/SVG/Hitta IT-jobb! Utvecklare, IT-support, säkerhet, projektledare mm-7.svg'
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          onClick={handleOpenModal}
        />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
