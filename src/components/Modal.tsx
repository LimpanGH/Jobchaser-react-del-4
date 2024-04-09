import React, { MouseEventHandler } from 'react';

interface ModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="p-8 bg-white rounded-lg">
        <div className="mb-4 text-center">
          <div className="mb-2 text-xl font-bold">Sign In</div>
          <button className="text-blue-500" onClick={onClose}>Close</button>
        </div>
        <div className="mb-4 text-center">
          <div className="mb-2 text-xl font-bold">Sign Up</div>
          <button className="text-blue-500" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};


