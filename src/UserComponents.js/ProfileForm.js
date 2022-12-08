import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import UserContext from "./UserContext";
import JoblyApi from "../JoblyAPI";

const ProfileForm = () => {

  // can also do firstName : currentUser.firstName.. etc.
  let initial_state = ({
    firstName: "",
    lastName : "",
    email : "",
    password: ""
  });

  let [formData, setFormData] = useState(initial_state);
  let [errors, setErrors] = useState(null);
  let {currentUser, setCurrentUser} = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(function confirmUser(){
    console.log("mounted")

    async function getUser() {
      if(currentUser){
        // do this
        console.log("effect 1")
      } else {
        console.log("effect 2")
        navigate("/login")
      }
    } 
    getUser();
  }, [currentUser]);

  async function handleChange(e) {
    let {name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name] : value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    try {
      let updatedProfile = await JoblyApi.updateProfile(currentUser.username, formData);
      console.log(updatedProfile);
      setCurrentUser(updatedProfile);
      console.log("new info is", currentUser);
    } catch (e) {
      setErrors(e);
      console.log("errors include:", errors)
    }
  }

  return(
    <div>
      <h1>Edit Profile Details</h1>

      <div>
      <h1>Join Jobly, today!</h1>

      <form onSubmit = {handleSubmit}>


        <label htmlFor = "firstName" >First Name
          <input
          type = "text"
          id = "firstName"
          value = {formData.firstName}
          name = "firstName"
          required
          onChange= {handleChange}
          >
          </input>
        </label>

        <label htmlFor = "lastName" >Last Name
          <input
          type = "text"
          id = "lastName"
          value = {formData.lastName}
          name = "lastName"
          required
          onChange= {handleChange}
          >
          </input>
        </label>

        <label htmlFor = "email" >Email
          <input
          type = "email"
          id = "email"
          value = {formData.email}
          name = "email"
          required
          onChange= {handleChange}
          >
          </input>

          <label htmlFor = "password" >Password
          <input
          type = "password"
          id = "password"
          value = {formData.password}
          name = "password"
          required
          onChange= {handleChange}
          >
          </input>
        </label>
      </label>

        <button>Join</button>

      </form>
    </div>


    </div>
  )
}

export default ProfileForm;