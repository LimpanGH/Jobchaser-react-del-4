// import { useEffect, useState } from 'react';
import mockData from './mockData.json';

console.log(mockData);

export function Jobs() {
  const renderedJobs = mockData.jobs.map((param) => (
    <div key={param.id} className='job-card'>
      <div className='logo'>
        <img className='logo-image' src={param.logo} alt='' />
      </div>
      <div className='company-info'>
        <h2>{param.company}</h2>
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

// ---------------------------------------------------------------

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
