import axios from "axios";

// backend was initiated on port 3001.
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  };

  // Individual API routes

  // ** Comapny All comapnies
//  Can filter on provided search filters:
//  * - minEmployees
//  * - maxEmployees
//  * - nameLike (will find case-insensitive, partial matches)

// data = {searchTerm} // the filters passed into searchForm.
  static async getCompanies(data) {
    console.log(data);
    let res = await this.request(`companies/`, data);
    return res.companies;
  };

  /** Get details on a company by handle. */

  static async getCompany(handle, data = {}) {
    let res = await this.request(`companies/${handle}`, data);
    console.log(res)
    return res.company;
  };

  // get all jobs

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  };

  // get given job via id

  static async getJobID(jobId) {
    let res = await this.request(`jobs/${jobId}`);
    return res.company;
  };

  // unsure why I have to send in an empty object for data.
  static async applyForJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    console.log(res);
    return res;
  };

  // get by username if authenticated as admin or given user

  static async getUsername(username) {
    let res = await this.request(`users/${username}`);
    console.log(res.user);
    return res.user;
  };

  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    console.log(res);
    return res;
  };

  static async signIn(data) {
    let res = await this.request(`auth/token`, data, "post");
    console.log(res);
    return res.token;
  };

  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    console.log(res);
    return res.token;
  };

  // obviously, you'll add a lot here ...
};

// ahrd coding this users access 
// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
JoblyApi.token = "catsndogs";


export default JoblyApi;