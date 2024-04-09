import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModalJob } from './ModalJob';

interface RenderedJobsProps {
  filteredJobs: Job[];
}

// Interface ---------------------------
interface Job {
  id: string;
  employer: {
    name: string;
  };
  headline: string;
  workplace_address: {
    city: string;
  };
  description?: {
    text: string;
  };
  logo_url?: string; // Optional
}

export const RenderedJobs: React.FC<RenderedJobsProps> = ({ filteredJobs }) => {
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
    <div className='cardWrapper'>
      {filteredJobs.map((job: Job) => (
        <div key={job.id} className='job-card' onClick={() => handleOpenModal(job)}>
          <div className='logo'>
            <img
              className='logo-image'
              src={job.logo_url ? job.logo_url : './public/images/JobChaser-SVG.svg '}
              alt=''
            />
          </div>
          <div className='company-info'>
            <h2>{job.employer.name}</h2>
            <p>Position: {job.headline}</p>
            <p>Location: {job.workplace_address.city}</p>
            <p>ID: {job.id}</p>
          </div>
          <div className='tag-btn-container'>
            <div className='tag-btn'>tag1</div>
            <div className='tag-btn'>tag2</div>
            <div className='tag-btn'>tag3</div>
          </div>
        </div>
      ))}
      {isModalOpen && selectedJob && (
        <ModalJob onClose={handleCloseModal} description={selectedJob?.description?.text || ''} />
      )}
    </div>
  );
};
