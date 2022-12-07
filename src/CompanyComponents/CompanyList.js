import React, {useEffect, useState} from "react";
import JoblyApi from "../JoblyAPI";
import CompanyCard from "./CompanyCard";
// import UUID for a new 

// need to take in companies.sending reqto backend?
const CompanyList = () => {

  let [companies, setCompanies] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(function requestCompanies() {
    async function getAllCompanies() {
      // use the API helper class here & reassign the companies state
      setCompanies(await JoblyApi.getCompanies());
    }
    getAllCompanies();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm)
  };

  const handleSubmit = async function requestWithFilters (e) {
      e.preventDefault();
      console.log(searchTerm)
      let res = await JoblyApi.getCompany({name : searchTerm});
      console.log(res);
  };

  let searchBar = <div>
    <form htmlFor = "searchTerm" onSubmit = {handleSubmit}>
      <label>
        <input
        type= "text"
        id = "searchTerm"
        name = "searchTerm"
        value = {searchTerm.filter}
        onChange = {handleChange}
        placeholder = "Company Name"
        >
        </input>
      </label>

      <button>Submit</button>
    </form>
  </div>


  return(
    
    <div>
      {searchBar}

      <h1>View All Companies</h1>
      {companies.map(({handle, name, description, numEmployees, logoUrl }) => <CompanyCard 
        handle = {handle} 
        name = {name} 
        description = {description} 
        numEmployees = {numEmployees}/>)}
    </div>
  )
}

export default CompanyList;