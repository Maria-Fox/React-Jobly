import './App.css';
import React, {useState, createContext, useContext, useEffect} from 'react';
import NavBar from './NavBar';
import NavRoutes from './NavRoutes';
import JoblyApi from './JoblyAPI';
import UserContext from './UserComponents.js/UserContext';
import { decodeToken } from "react-jwt";
import useLocalStorage from './Hooks/useLocalStorage';

export const jobly_token = "jobly-token-key";

function App() {

  let [currentUser, setCurrentUser] = useState(null);
  // token is hooked into state + local storage.
  let [token, setToken] = useLocalStorage();
  let [appliedJobs , setAppliedJobs] = useState(new Set([]));

// ***************************************************************

  useEffect(function loadUserInfo() {
    console.log("hello")
    async function getCurrentUser() {
      if(token){
        try {
          // console.log("Valid token", token)
          // token payload is the username and isAdmin prop. Destructure.
          const {username}  = decodeToken(token);          
         // add token to Api class so it can be used to call the API.
          JoblyApi.token = token;
          let response = await JoblyApi.getUsername(username);
          const { applications } = response;
          setCurrentUser(response);
          setAppliedJobs(new Set(applications));
          // console.log(currentUser, "is the current user")
        } catch (e) {
          // console.error("ApploadUserInfo: problem loading", e);
          setCurrentUser(null);
          return {message: "Unauthorized"};
        }
    } else {
      console.log("no token found")
    }
    } getCurrentUser();
  }, [token]);


// ***************************************************************

  async function createAccount(userData) {
    // should include the new users username, password, firstName, lastName, email
    try {
      let newAccountToken = await JoblyApi.registerUser(userData);
      // console.log(newAccountToken);
      setToken(newAccountToken);
      return {success : true}
    } catch (e) {
      console.log(e);
      return {success : false, e}
    }
  };

// ***************************************************************

  async function login(userCreds) {
    try{
      let loginToken = await JoblyApi.signIn(userCreds);
      // console.log(loginToken)
      setToken(loginToken);
      let {username} = decodeToken(loginToken);
      setCurrentUser(username)
      // console.log("currentUser is now: ", currentUser)
      return {success : true};
    } catch(e){
      console.log(e);
      return {success: false, e};
    }
  };

// ***************************************************************

  async function logout(user) {
    setCurrentUser(null);
    setToken(null);
    console.log(currentUser, token)
  };

// ***************************************************************

  async function handleApply(jobId) {
    // use currentUser.isername (once resovled tokem issues)
    try {
      // if the jobId is already in set return/ do not allow to apply
      if(didUserPreviouslyApply(jobId)) return;

      // otherwise, send the API request and then re-write state w/ new set.
    // hardcoding "newnew" as argument for currentUser.username 
      let applied = await JoblyApi.applyForJob(currentUser.username, jobId);
      setAppliedJobs(new Set([...appliedJobs, jobId]));
    } catch(err){
      console.log(err);
    }
  };

  function didUserPreviouslyApply(jobId){
    // return true or false- if the set already has this job applied for
    return appliedJobs.has(jobId);
  };

// ***************************************************************

  // check if there is a value in currentUser & token to gage what NavBar should look like.

  return (
    <UserContext.Provider value = {{currentUser, setCurrentUser, handleApply, didUserPreviouslyApply}}>
      <div className="App">
          <NavRoutes createAccount = {createAccount} login = {login}/>
          <NavBar logout = {logout}/>
      </div>
    </UserContext.Provider>
  ); 
};

export default App;
