import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, Typography, Button, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    height: '100%', // This makes the height of each card fixed
  },
  jobDescription: {
    position: 'relative',
    maxHeight: '150px',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      display: 'block',
      height: '60px',
      position: 'absolute',
      bottom: '0',
      opacity: '0.9',
      width: '100%',
      background: 'linear-gradient(transparent, white)',
    },
  },
  readMore: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    zIndex: '10',
    bottom: '0',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slight opaque background
    padding: '5% 40%',
    borderRadius: '4px',
    textDecoration: 'none',
  },
});

function Cards() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        fetchJobs();
      }
    });

    intersectionObserver.observe(document.querySelector('#observer'));

    return () => intersectionObserver.disconnect();
  }, [jobs]); // Run effect whenever jobs change

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        "limit": 10,
        "offset": (page.current - 1) * 10 // Calculate offset based on current page
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const result = await response.json();
      console.log(result)
      setJobs(prevJobs => [...prevJobs, ...result.jdList]); // Append new jobs to existing list
      page.current++; // Increment page for next request
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={3}>
      {jobs.map((job, index) => (
        <Grid item key={`${job.jdUid}-${index}`} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="div">
                {job.jobRole}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.companyName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.location}
              </Typography>
              <div className={classes.jobDescription}>
                <Typography variant="body2" color="text.secondary">
                  {job.jobDetailsFromCompany}
                </Typography>
                <Link href="#" className={classes.readMore}>Read more</Link>
              </div>
              <Button variant="contained">Easy Apply</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <div id="observer" style={{ height: '10px', width: '100%' }}></div>
      {loading && <p>Loading...</p>}
    </Grid>
  );
}

export default Cards;
