import { useState } from 'react';
import { ModalJob } from './ModalJob';
import { Job } from './Jobs';

export interface RenderedJobsProps {
  filteredJobs: Job[];
  formatPublicationDate: (pulication_date: string) => string;
}

export const RenderedJobs: React.FC<RenderedJobsProps> = ({
  filteredJobs,
  formatPublicationDate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleOpenModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {filteredJobs.map((job: Job) => (
        <div key={job.id} className='job-card' onClick={() => handleOpenModal(job)}>
          <div className='logo, hide-company-info'>
            <img
              className='logo-image'
              src={job.logo_url ? job.logo_url : './public/images/JobChaser-SVG.svg '}
              alt=''
            />
          </div>
          <div className=' company-info'>
            <h2 className='font-bold'>{job.employer.name}</h2>
            {/* <p>Position: {job.headline}</p> */}
            <p>{job.headline}</p>
            <p className='hide-company-info'>Location: {job.workplace_address.city}</p>
            <p className='hide-company-info'>ID: {job.id}</p>
            <p className='hide-company-info'>
              Datum: {formatPublicationDate(job.publication_date)}
            </p>
          </div>
        </div>
      ))}

      {isModalOpen && selectedJob ? (
        <ModalJob
          onClose={handleCloseModal}
          description={selectedJob?.description?.text || ''}
          logoUrl={selectedJob?.logo_url || ''}
          headline={selectedJob?.headline || ''}
          publication_date={selectedJob?.publication_date || ''}
          formatPublicationDate={formatPublicationDate}
        />
      ) : (
        <></>
      )}
    </>
  );
};
