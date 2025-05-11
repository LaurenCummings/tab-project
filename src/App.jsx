import './App.css'
import data from './data';
import { useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  console.log(data);


  return (
    <div>
      App
    </div>
  )
}

export default App
