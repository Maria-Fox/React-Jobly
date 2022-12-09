import React, {useState, useEffect, useContext} from "react";
import JoblyApi from "../JoblyAPI";
import JobCard from "./JobCard";
import UserContext from "../UserComponents.js/UserContext";

const JobList = () => {

  let [jobList, setJobList] = useState(null);
  let [searchTerm, setSearchTerm] = useState("");
  let {currentUser} = useContext(UserContext);

  useEffect(function requestAllJobs () {
    console.log("mount");
    async function getAllJobs(){
      // setJobList(await JoblyApi.getJobs());

    let allJobs = await JoblyApi.getJobs();
    // console.log(res);
    setJobList(allJobs);
    console.log("effect ran")
    // console.log(jobList);
    }
    getAllJobs();
  }, []);

  let handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let handleSubmit = async (e, {searchFor}) => {
    e.preventDefault();
    try{
      let searchedJob =  await JoblyApi.getCompanies(searchTerm);
      console.log(searchedJob);
    } catch (e) {
      console.log(e);
    }
  };

  let searchBar = <div>
    <form htmlFor = "searchTerm" >
      <label>
        <input
        type= "text"
        id = "searchTerm"
        name = "searchTerm"
        value = {searchTerm}
        onChange = {handleChange}
        placeholder = "Job title"
        required
        >
        </input>
      </label>

      <button>Search</button>
    </form>
  </div>


  return(
    <div>
      {searchBar}

      {jobList ? jobList.map(({id, title, salary, equity, companyHandle, companyName}) => 
        <JobCard 
        key = {id} 
        title = {title} 
        salary = {salary} 
        equity = {equity} 
        companyHandle = {companyHandle} 
        companyName = {companyName}
        id = {id}
        />)
        : <p>Loading...</p> }
      
    </div>
  )
}

export default JobList;
