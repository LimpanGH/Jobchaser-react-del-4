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

// import { getData } from './GetData';

// const urlWildcard= 'https://jobsearch.api.jobtechdev.se/search?q=muse*';
// const urlAdSearch= 'https://jobsearch.api.jobtechdev.se/search?q=Flen';
// const urlLogo = 'https://jobsearch.api.jobtechdev.se/ad/8430129/logo';
// const urlPhrase = 'https://jobsearch.api.jobtechdev.se/search?q=%22search%20for%20this%20phrase%22';
// const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';

// getData(urlGeographicalArea);

import { useEffect, useState } from 'react';
import { getData } from './GetData';

const urlGeographicalArea = 'https://jobsearch.api.jobtechdev.se/search?q=Flen';

export function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(urlGeographicalArea);
        setJobs(data.hits); // Antag att hits är den del av data som innehåller jobben
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Använd en tom array för att endast köra useEffect en gång när komponenten renderas för första gången

  
  const renderedJobs = jobs.map((param) => (
    <div key={param.id} className='job-card'>
      <div className='logo'>
        <img className='logo-image' src={param.logo} alt='' />
      </div>
      <div className='company-info'>
        <h2>{param.hits[0].employer.name}</h2>
        <p>Position: {param.position}</p>
        <p>Location: {param.location}</p>
      </div>
      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag1</div>
      </div>
    </div>
  ));
  
  return (
    <>
      <div className='card-wrapper'> {renderedJobs}</div>
    </>
  );
}

// data.hits[0].employer.name