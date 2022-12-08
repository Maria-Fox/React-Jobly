import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import JoblyApi from "../JoblyAPI";

const LoginForm = ({login}) => {

  let navigate = useNavigate();

  let initial_state = {
    username : "",
    password : "",
  }

  let [formData, setFormData] = useState(initial_state);
  let [errors, setErrors] = useState(null);

  let handleChange = (e) => {
    let {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]:value
    }))
  };

  async function handleSubmit (e) {
    e.preventDefault();
    console.log(formData)
    // this is where I should pass the formData onto a diff function to handle the API call and so forth.
    // if successful navigate to user home pg.
    try{
      let response = await login(formData);
      console.log(response);
      if(response.success){
        navigate("/companies");
      } else {
        setErrors(response);
        console.log(errors);
      };
    } catch (e) {
      console.log(e);
    };
  };

  return(
    <div>
      <h1>Login</h1>

      <form onSubmit = {handleSubmit}>

        <label htmlFor = "username" >Username
          <input
          type = "text"
          id = "username"
          value = {formData.username}
          name = "username"
          required
          onChange= {handleChange}
          >
          </input>
        </label>

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

        <button>Login</button>

      </form>
    </div>
  )
}

export default LoginForm;