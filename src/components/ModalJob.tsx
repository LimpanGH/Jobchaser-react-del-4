import { MouseEventHandler } from 'react';

interface ModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  description: string;
  logoUrl: string;

  headline: string;
  publication_date: string;
  formatPublicationDate: (publication_date: string) => string;
}

export const ModalJob: React.FC<ModalProps> = ({
  onClose,
  description,
  logoUrl,
  headline,
  publication_date,
  formatPublicationDate,
}) => {
  console.log('Headline:', headline);

  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50'>
      <div className='p-8 bg-white rounded-lg h-27 min-h-[200px] max-w-[90vw] overflow-hidden '>
        <div className='mb-4 text-center'>
          <div className='logo'>
            <img className='logo-image' src={logoUrl} alt='' />
          </div>

          <div className='mb-2 font-bold text-left text-m'>
            <p>{headline}</p>
          </div>
          <div className='mb-2 font-bold text-left text-m'>
            <p>{formatPublicationDate(publication_date)}</p>
          </div>

          <p className='overflow-y-auto max-h-[80vh] text-left'>{description}</p>

          <button className='text-blue-500' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
