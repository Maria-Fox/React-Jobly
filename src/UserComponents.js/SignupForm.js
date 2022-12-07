import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

const SignupForm = ({createAccount}) => {
  // console.log(typeof(createAccount));
  let navigate = useNavigate();

  let initial_state = {
    username : "",
    password : "",
    firstName : "",
    lastName : "",
    email : ""
  }

  let [formData, setFormData] = useState(initial_state);
  let [errors, setErrors] = useState([]);

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
    try {
      let response = await createAccount(formData);
      // response is undefined for some reason?
      console.log("resp is:", response);

      if(response.success){
        navigate("/companies");
      } else {
        // or response.e ?? but that wasn't working.
        setErrors(response);
        console.log(errors);
      };
    } catch (e) {
      return alert("Something went wrong- please try again later.")
    }
  }

  return(
    <div>
      <h1>Join Jobly, today!</h1>

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
      </label>

        <button>Join</button>

      </form>
    </div>
  )
}

export default SignupForm;