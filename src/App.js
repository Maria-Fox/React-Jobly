import './App.css';
import React, {useState, createContext, useContext} from 'react';
import NavBar from './NavBar';
import NavRoutes from './NavRoutes';
import JoblyApi from './JoblyAPI';

function App() {

  let [currentUser, setCurrentUser] = useState(null);
  let [token, setToken] = useState(null);
  let UserContext = createContext();
  // for children components that use the context :
  // let user = useContext(UserContext);

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
      let responseToken = await JoblyApi.signIn(userCreds);
      setToken(responseToken);
      return {success : true};
    } catch(e){
      console.log(e);
      return {success: false, e};
    }
    
  }

  return (
    <UserContext.Provider value = {currentUser, setCurrentUser}>
      <div className="App">
          <NavRoutes createAccount = {createAccount} login = {login}/>
          <NavBar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
