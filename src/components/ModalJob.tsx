import { MouseEventHandler } from 'react';

interface ModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  description: string;
}

export const ModalJob: React.FC<ModalProps> = ({ onClose, description }) => {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50'>
      <div className='p-8 bg-white rounded-lg'>
        <div className='mb-4 text-center'>
          <div className='mb-2 text-xl font-bold'>Job Description</div>
          <p>{description}</p>
          <button className='text-blue-500' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
