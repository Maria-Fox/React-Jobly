import React from "react";
import {Routes, Route} from "react-router-dom"; 
import WelcomePage from "./WelcomePage";
import CompanyList from "./CompanyComponents/CompanyList";
import CompanyCard from "./CompanyComponents/CompanyCard";
import CompanyDetails from "./CompanyComponents/CompanyDetails"

const NavRoutes = () => {
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
        element = {<CompanyDetails/>}
      />

      <Route 
        path = "jobs"
        element = {<h1>jobs pg</h1>}
      /> 

      <Route 
        path = "/login"
        element = {<h1>login pg</h1>}
      />

      <Route 
        path = "/signup"
        element = {<h1>signup pg</h1>}
      />

      <Route 
        path = "/profile"
        element = {<h1>profile</h1>}
      />

      {/* <Route
        path = "/companies/:handle"
        element = {<CompanyJobs />}
      /> */}




    </Routes>
  )
}

export default NavRoutes;