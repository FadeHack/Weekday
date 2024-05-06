import React, { useEffect, useState } from 'react';

function Cards() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    const result = await response.json();
    setJobs(result);
  };

  return (
    <div className="Cards">
      {jobs.map(job => (
        <div key={job.id}>
          {/* Implement your job card here */}
        </div>
      ))}
    </div>
  );
}

export default Cards;
