/*
 * GET /site/{siteID} - {Headers -> Authorization : token}
 * {response} - 200 OK
 * Invalid Token - 403 Forbidden
 */
let siteIDResponse = {
  "Id": "59668f79fad29109e4805234",
  "siteID": "003",
  "siteName": "France Office",
  "description": "The office in France",
  "userCount": "51",
  "active": "true",
  "configData": "lmcs-dlm-data"
};

/*
 * GET /site/allsites - {Headers -> Authorization : token}
 * {response} - 200 OK
 * Inadequate Permissions - 403 Forbidden
 */
let allsitesResponse = {

};

/*
 * POST /site/update/{siteID}
 * {Headers -> Authorization : token}
 * {Body -> [operation, element, value]}
 * Example: {operation: update, element: userCount, value: 17}
 *
 * Site info updated successfully - 200 OK
 * Invalid Token - 403 Forbidden
 */

/*
 * POST /site/create/
 * {Headers -> Authorization : token}
 * {Body -> [siteName, description]}
 * Example: {siteName: BatCave, description: Batman's Lair}
 *
 * Site info updated successfully - 200 OK
 * Inadequate Permissions - 403 Forbidden
 */