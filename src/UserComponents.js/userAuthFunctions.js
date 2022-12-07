// useContect for username and isAdmin field
import React from "react";
import JoblyApi from "../JoblyAPI";


async function createAccount(userData) {
  // should include the new users username, password, first_name, last_name, email

  let {username, password, first_name, last_name, email} = userData;
  console.log(userData);

  try {

    let res = await JoblyApi.registerUser(userData);
    console.log("createAccount res is:", res);

  } catch (e) {
    console.log(e);
  }

}