import './App.css';
import React, {useState, createContext, useContext, useEffect} from 'react';
import NavBar from './NavBar';
import NavRoutes from './NavRoutes';
import JoblyApi from './JoblyAPI';
import UserContext from './UserComponents.js/UserContext';
// import jwt from "jsonwebtoken";
// gives me polyfill error???
import useLocalStorage from './Hooks/useLocalStorage';

export const jobly_token = "jobly-token-key"

function App() {

  let [currentUser, setCurrentUser] = useState(null);
  // hooked into state + local storage.
  let [token, setToken] = useLocalStorage(jobly_token);
  // for children components that use the context :
  // let user = useContext(UserContext);

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
        try {
          // token pyload is the username and isAdmin prop
          // let { username } = jwt.decode(token);
          // add token to Api class so it can use it to call the API.
          JoblyApi.token = token;
          // let username = "newnew";
          let currentUser = await JoblyApi.getUsername("newnew");
          console.log("thisis the current user:", currentUser)
          setCurrentUser(currentUser);
          console.log("current user is :", currentUser);
          console.log(token);
          // setApplicationIds(new Set(currentUser.applications));
        } catch (e) {
          console.error("App loadUserInfo: problem loading", e);
          setCurrentUser(null);
        }
      // setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    // setInfoLoaded(false);
    if(token){
      getCurrentUser();
    }
  }, [token]);

  async function createAccount(userData) {
    // should include the new users username, password, firstName, lastName, email
    try {
      let newAccountToken = await JoblyApi.registerUser(userData);
      console.log(newAccountToken);
      setToken(newAccountToken);
      return {success : true}
    } catch (e) {
      console.log(e);
      return {success : false, e}
    }
  };


  async function login(userCreds) {
    console.log(userCreds);
    try{
      let loginToken = await JoblyApi.signIn(userCreds);
      setToken(loginToken);
      return {success : true};
    } catch(e){
      console.log(e);
      return {success: false, e};
    }
    
  };

  async function logout(user) {
    setCurrentUser(null);
    setToken(null);
    console.log(currentUser, token)
  }

  // check if there is a value in currentUser & token to gage what NavBar should look like.

  return (
    <UserContext.Provider value = {currentUser, setCurrentUser}>
      <div className="App">
          <NavRoutes createAccount = {createAccount} login = {login}/>
          <NavBar logout = {logout}/>
      </div>
    </UserContext.Provider>
  );
};

export default App;
