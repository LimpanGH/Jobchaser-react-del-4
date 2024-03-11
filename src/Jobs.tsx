// mockdata  component---------------------------------------------------------------

// import { useEffect, useState } from 'react';
// import mockData from './mockData.json';

// console.log(mockData);

// export function Jobs() {
//   const renderedJobs = mockData.jobs.map((param) => (
//     <div key={param.id} className='job-card'>
//       <div className='logo'>
//         <img className='logo-image' src={param.logo} alt='' />
//       </div>
//       <div className='company-info'>
//         <h2>{param.company}</h2>
//         <p>Position: {param.position}</p>
//         <p>Location: {param.location}</p>
//       </div>
//       <div className='tag-btn-container'>
//         <div className='tag-btn'>tag1</div>
//         <div className='tag-btn'>tag1</div>
//         <div className='tag-btn'>tag1</div>
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <div className='card-wrapper'> {renderedJobs}</div>
//     </>
//   );
// }
// --------------------------------------------------------------

// mockdata reusable component---------------------------------------------------------------

// const Job = (param) => {
//   return (
//     <div key={param.id} className='job-card'>
//       <div className='logo'>
//         <img className='logo-image' src={param.logo} alt='' />
//       </div>
//       <div className='company-info'>
//         <h2>{param.company}</h2>
//         <p>Position: {param.position}</p>
//         <p>Location: {param.location}</p>
//       </div>
//       <div className='tag-btn-container'>
//         <div className='tag-btn'>tag1</div>
//         <div className='tag-btn'>tag1</div>
//         <div className='tag-btn'>tag1</div>
//       </div>
//     </div>
//   );
// };

// function Jobs2() {
//   // fetch data from API
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   if (!isLoading && !jobs.length) {
//     return 'loading...';
//   }

//   return (
//     <div className='card-wrapper'>
//       {mockData.jobs.map((param) => (
//         <Job data={param} key={param.id} />
//       ))}
//     </div>
//   );
// }
// --------------------------------------------------------------

// Fetch and render from JobTech --------------------------------------------------------------

// const urlWildcard= 'https://jobsearch.api.jobtechdev.se/search?q=muse*';
// const urlAdSearch= 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const urlLogo = 'https://jobsearch.api.jobtechdev.se/ad/8430129/logo';
// const urlPhrase = 'https://jobsearch.api.jobtechdev.se/search?q=%22search%20for%20this%20phrase%22';
// const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';

// getData(urlGeographicalArea);

import { useEffect, useState } from 'react';
import { getData } from './GetData';
// import { SearchField } from './SearchField';


const urlGeographicalArea: string =
  'https://jobsearch.api.jobtechdev.se/search?q=Flen';

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
  logo_url?: string; // Optional property
}


// Jobs -----------------------------------
export function Jobs(): JSX.Element {
  const [jobs, setJobs] = useState<Job[]>([]);

  
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data: any = await getData(urlGeographicalArea);
        setJobs(data.hits as Job[]);
        console.log(data.hits[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  // const handleSearch =(searchValue: string): void => {
  //   console.log('Search value', searchValue);
  // }

  
  // Render jobs
  const renderedJobs = jobs.map((job: Job) => (
    <div key={job.id} className='job-card'>
      <div className='logo'>
        <img
          className='logo-image'
          src={job.logo_url ? job.logo_url : './images/JobChaser-SVG.svg'}
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
  ));

  return (
    <>
      <div className='card-wrapper'> {renderedJobs}</div>

      {/* <div>
      < SearchField onSearch={handleSearch} />
      <div className="card-wrapper">{renderedJobs}</div>
    </div> */}
      
    </>
  );
}
