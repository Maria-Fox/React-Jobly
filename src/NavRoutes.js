import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom"; 
import WelcomePage from "./WelcomePage";
import CompanyList from "./CompanyComponents/CompanyList";
import CompanyCard from "./CompanyComponents/CompanyCard";
import CompanyDetails from "./CompanyComponents/CompanyDetails"
import JobList from "./JobComponents/JobList";
import SignupForm from "./UserComponents.js/SignupForm";
import LoginForm from "./UserComponents.js/LoginForm";
import Profile from "./UserComponents.js/ProfileForm";
import UserContext from "./UserComponents.js/UserContext";

const NavRoutes = ({createAccount, login, handleApply}) => {
  let {currentUser} = useContext(UserContext);
  console.log(currentUser, "from NavRoutes pg");
  
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

// Note: solution does a PrivateRoute componenet & tests for currentUser, renders chidlren. Can't do that here since the did a switch & that's outdated for React version I used.