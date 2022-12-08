import React from "react";
import {Routes, Route} from "react-router-dom"; 
import WelcomePage from "./WelcomePage";
import CompanyList from "./CompanyComponents/CompanyList";
import CompanyCard from "./CompanyComponents/CompanyCard";
import CompanyDetails from "./CompanyComponents/CompanyDetails"
import JobList from "./JobComponents/JobList";
import SignupForm from "./UserComponents.js/SignupForm";
import LoginForm from "./UserComponents.js/LoginForm";
import Profile from "./UserComponents.js/ProfileForm";

const NavRoutes = ({createAccount, login, handleApply}) => {
  return(
    <Routes>

      <Route
        exact path = "/"
        element = {<WelcomePage />} 
      />

      <Route 
        path = "/companies"
        element = {<CompanyList />}
      />

      <Route 
        path = "/companies/:handle"
        element = {<CompanyDetails />}
      />

      <Route 
        path = "jobs"
        element = {<JobList />}
      /> 

      <Route 
        path = "/login"
        element = {<LoginForm login = {login}/>}
      />

      <Route 
        path = "/signup"
        element = {<SignupForm createAccount = {createAccount}/>}
      />

      <Route 
        path = "/profile"
        element = {<Profile />}
      />




    </Routes>
  )
}

export default NavRoutes;