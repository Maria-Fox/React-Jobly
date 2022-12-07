import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyAPI";
import JobCard from "./JobCard";

const JobList = () => {

  let [jobList, setJobList] = useState(null);

  useEffect(function requestAllJobs () {
    async function getAllJobs(){
      // setJobList(await JoblyApi.getJobs());

    let res = await JoblyApi.getJobs();
    console.log(res);
    setJobList(res);
    console.log(jobList);
    }
    getAllJobs();
  }, []);

  return(
    <div>
      <p>This is the job list</p>
      
      {jobList ? jobList.map(({companyHandle, companyName, equity, id, salary, title}) => {
        <JobCard 
          companyName = {companyName} 
          salary = {salary} 
          equity = {equity}
          title = {title}
          companyHandle = {companyHandle}
          />
      }) : <p>Loading ...</p>}
      
    </div>
  )
}

export default JobList;