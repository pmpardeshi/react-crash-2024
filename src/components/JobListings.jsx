import React from 'react'
import { useState, useEffect } from 'react';
import JobListing from './JobListing.jsx'

const JobListings = ( {isHome = false } ) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 'http://localhost:8800/jobs?_limit=3' : 'http://localhost:8800/jobs'
      try{
      const res = await fetch(apiUrl);
      const data = await res.json()      
      setJobs(data)
      }
      catch(error){
          console.log('error in data', error)
      }
      finally{
        setLoading(false)
      }
    }

    fetchJobs()
  }, []);

  return (
    <>
        {/* <!-- Browse Jobs --> */}
        
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (<h2>Loading...</h2>) : (<>
            {jobs.map(job => (            
        <JobListing  key={job.id} job = {job}/>
           ))}
          </>)} 
          
         
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings