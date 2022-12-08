import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import JoblyApi from "../JoblyAPI";
import CompanyCard from "./CompanyCard";
import UserContext from "../UserComponents.js/UserContext";

// need to take in companies.sending reqto backend?
const CompanyList = () => {

  let [companies, setCompanies] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let {currentUser , setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(function requestCompanies() {

    async function getAllCompanies() {
      try {
          setCompanies(await JoblyApi.getCompanies());
        } catch(e){
        console.log(e)
      }
    }

    // REMOVE THE ! - ONLY NEGATING TO CONTINUE DEV 
    if(!currentUser){
      getAllCompanies();
    } else {
      navigate("/login")
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm)
  };

  // {searchFor} creates query structure in URL bar.
  async function handleSubmit (e, {searchFor}) {
      console.log("hello");
      e.preventDefault();
      console.log(searchTerm, typeof searchFor)
      // let res = await JoblyApi.getCompany(searchTerm);
      // console.log(await JoblyApi.getCompany(searchTerm));
      try {
        // sending as object to fit data structure in route
        let companies = await JoblyApi.getCompanies(searchTerm);
        console.log(companies)
      } catch (e){
        console.log(e);
      }
  };


  let searchBar = <div>
    <form htmlFor = "searchTerm" onSubmit = {handleSubmit}>
      <label>
        <input
        type= "text"
        id = "searchTerm"
        name = "searchTerm"
        value = {searchTerm}
        onChange = {handleChange}
        placeholder = "Company Name"
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

      <h1>View All Companies</h1>
      {companies.map(({handle, name, description, numEmployees, logoUrl }) => <CompanyCard 
        key = {handle}
        handle = {handle} 
        name = {name} 
        description = {description} 
        numEmployees = {numEmployees}/>)}
    </div>
  )
}

export default CompanyList;