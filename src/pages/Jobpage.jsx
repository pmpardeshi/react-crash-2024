import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from '../components/JobListing';
import { useParams } from 'react-router-dom';


const Jobpage = () => {
    const { id } = useParams();
    // const id = 4;
    const [job, setJob] = useState({});

    useEffect(() => {
        const fetchJob = async () => {
            try{
            const apiUrl = `http://localhost:8800/jobs/${id}`;
            const res = await fetch(apiUrl);  
            const data = await res.json();  
            console.log(data)  
            setJob(data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchJob() 
    }, []);

  return (
    <div> <JobListing  key={job.id} job = {job}/>
    </div>
  )
}


export default Jobpage