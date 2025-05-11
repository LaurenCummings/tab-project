import './App.css'
import data from './data';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const {company, dates, duties, title} = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  )
}

export default App
