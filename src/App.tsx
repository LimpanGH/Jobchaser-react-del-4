import React from 'react';
import mockData from './mockData.json';

console.log(mockData);

function MyComponent() {
  const renderedJobs = mockData.jobs.map((param) => (
    <div key={param.id}>
      <h2>{param.company}</h2>
      <p>Position: {param.position}</p>
      <p>Location: {param.location}</p>
    </div>
  ));

  return <div> {renderedJobs}</div>;
}

export default MyComponent;
