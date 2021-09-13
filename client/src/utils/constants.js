// const BASE_URL = "http://localhost:3001/";
// const BASE_URL = "https://api-pf-050921.herokuapp.com/";
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001"
const TECH_USERS_URL = `${BASE_URL}/techUsers`;

// url admin

const ADMIN_URL = `${BASE_URL}/admin`;

//url Job Types

const JOB_TYPES_URL = `${BASE_URL}/jobTypes`;
// url final User
const FINAL_USER_URL = `${BASE_URL}/finalUsers`;

//url request
const REQUEST_URL = `${BASE_URL}/request`;

const LOGIN_URL = `${BASE_URL}/login`

module.exports = {
  TECH_USERS_URL,
  ADMIN_URL,
  JOB_TYPES_URL,
  FINAL_USER_URL,
  REQUEST_URL,
  LOGIN_URL,
};
