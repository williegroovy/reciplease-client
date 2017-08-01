/*
 * GET /user/allusers - {Headers -> Authorization : token}
 * {response} - 200 OK
 * Inadequate Permissions - 403 Forbidden
 */
let allusersResponse = [
  {
    "username": "cat",
    "usertype": "SUPER_ADMIN",
    "email": "cat@gmail.com",
    "permissions": {
      "2748": "ADMIN",
      "3265": "ADMIN",
      "5014": "ADMIN",
      "5869": "ADMIN",
      "6098": "ADMIN",
      "6296": "ADMIN",
      "6360": "ADMIN",
      "6740": "ADMIN",
      "7453": "ADMIN",
      "004": "ADMIN",
      "0614": "ADMIN"
    }
  },
  {
    "username": "bear",
    "usertype": "ADMIN",
    "email": "bear@gmail.com",
    "permissions": {
      "6422": "ADMIN",
      "001": "TECH",
      "002": "ADMIN",
      "003": "BASIC",
      "0986": "ADMIN"
    }
  },
  {
    "username": "john",
    "usertype": "DEMO",
    "email": "john@john.com",
    "permissions": {}
  },
  {
    "username": "gro",
    "usertype": "DEMO",
    "email": "grag@gmail.com",
    "permissions": {}
  }
];

/*
 * GET /user/validate - {Headers -> Authorization : token}
 *
 * Valid Token - 200 OK
 * Invalid Token - 403 Forbidden
 */

/*
 * GET /user/{username} - {Headers -> Authorization : token}
 * {response} - 200 OK
 * Invalid Token - 403 Forbidden
 */
let usernameResponse = {
  "username": "williamrichardson",
  "userType": "DEMO",
  "permissions": {
    "003": "ADMIN"
  }
};

/*
 * PUT /user/permissions/{username}/{siteId}/{PERMISSION} {Headers -> Authorization : token}
 * Example: /user/permissions/williamrichardson/003/ADMIN
 * User permission updated - 200 OK
 * Inadequate Permissions - 403 Forbidden
 */

/*
 * POST /user/login - {Body -> [email, password]}
 * {response} - 200 OK
 * User does not exist - 404 Not Found
 */
let loginResponse = {
  "userType": "DEMO",
  "permissions": {
    "003": "ADMIN"
  },
  "token": "...",
  "username": "williamrichardson"
};

/*
 * POST /user/register - {Body -> [firstname, password, email, lastname]}
 * {response} - 200 OK
 * Fields need to be non empty: {missing field} - 400 Bad Request
 */
let registerResponse = {
  "userType": "DEMO",
  "permissions": {
    "003": "ADMIN"
  },
  "token": "...",
  "username": "williamrichardson"
};