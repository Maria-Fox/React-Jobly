import React, {useContext} from "react";
import UserContext from "./UserComponents.js/UserContext";

const WelcomePage = () => {

  let {currentUser} = useContext(UserContext);

  if(currentUser){
    return(
      <div className = "WelcomePage-img">
        <h1>Jobly</h1>
        <p>The main pg</p>

        {/* <img  src = {`https://images.unsplash.com/photo-1548783300-70b41bc84f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`} alt = "backgorund-img"/> */}
  
      </div>
    )
  } else {
    return(
      <div>
        <p>There is no current user.</p>
      </div>
    )
  }
  
}

export default WelcomePage;