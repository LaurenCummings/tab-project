import './App.css'
import data from './data';
import { useState } from 'react';

function App() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const {company, dates, duties, title} = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        {/* job */}
      </div>
    </section>
  )
}

export default App
