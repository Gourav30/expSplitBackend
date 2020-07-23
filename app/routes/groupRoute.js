const express = require('express');
const router = express.Router();
const cors = require('cors')
const groupController = require("../controllers/groupController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/groups`;

    app.use(cors())

    app.get(`${baseUrl}/view/all`,auth.isAuthorized, groupController.getAllGroups);

    /**
	 * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/view/all  [Get all groups].
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *      {
     *           "error": false,
     *           "message": "List of groups",
     *           "status": 200,
     *           "data": [
     *               {
     *                   "groupName": "test",
     *                   "groupDescription": "test",
     *                   "users": [
     *                       "5f0b4386589f6f1834ff40e2",
     *                       "5f0b553ba17c955020d19142"
     *                   ],
     *                   "groupId": "u8hIPtxOX",
     *                   "createdBy": "5f0b553ba17c955020d19142",
     *                   "createdAt": "2020-07-16T18:50:03.845Z",
     *                   "updatedAt": "2020-07-16T18:50:03.845Z",
     *                   "__v": 0
     *               },
     *               {
     *                   "groupName": "Test Gourav",
     *                   "groupDescription": "Test Gourav",
     *                   "users": [
     *                       "5f0b4386589f6f1834ff40e2",
     *                       "5f0b553ba17c955020d19142",
     *                       "5f11dee0ec68be3578bb61bf"
     *                   ],
     *                   "groupId": "fE_lKwYm5",
     *                   "createdBy": "5f0b4386589f6f1834ff40e2",
     *                   "createdAt": "2020-07-18T18:22:52.993Z",
     *                   "updatedAt": "2020-07-18T18:22:52.993Z",
     *                   "__v": 0
     *               },
     *               {
     *                   "groupName": "gorv test",
     *                   "groupDescription": "gorv test",
     *                   "users": [
     *                       "5f0b4386589f6f1834ff40e2",
     *                       "5f0b553ba17c955020d19142",
     *                       "5f11dee0ec68be3578bb61bf",
     *                       "5f167d35cb31de095cddba1a",
     *                       "5f167ea032b9ff191866d519"
     *                   ],
     *                   "groupId": "JuHQPtdP3",
     *                   "createdBy": "5f1737a9d7439a39dcf33bc8",
     *                   "createdAt": "2020-07-21T18:52:21.220Z",
     *                   "updatedAt": "2020-07-21T18:52:21.220Z",
     *                   "__v": 0
     *               },
     *               {
     *                   "groupName": "gorv test",
     *                   "groupDescription": "gorv test",
     *                   "users": [
     *                       "5f0b4386589f6f1834ff40e2",
     *                       "5f0b553ba17c955020d19142",
     *                       "5f11dee0ec68be3578bb61bf"
     *                   ],
     *                   "groupId": "REzQAKGFS",
     *                   "createdBy": "5f1737a9d7439a39dcf33bc8",
     *                   "createdAt": "2020-07-21T18:54:26.710Z",
     *                   "updatedAt": "2020-07-21T18:54:26.710Z",
     *                   "__v": 0
     *               }
     *           ]
     *       }
     *
	 * @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *   "error": true,
	 *   "message": "Failed To Find User Details",
	 *   "status": 500,
	 *   "data": null
	 *
     *  }
	 */


    // params: userId.
    app.get(`${baseUrl}/getAllGroupsForaUser`, auth.isAuthorized, groupController.getAllGroupsForaUser);
    /**
      * @apiGroup groups
      * @apiVersion  1.0.0
      * @api {get} /api/v1/groups/:groupId/getAllGroupsForaUser [Get list of group for a user]
      * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
      * @apiParam {String} groupId The groupId should be passed as the URL parameter
      *
      *
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      *
      * @apiSuccessExample {object} Success-Response:
      *    {
      *          "error": false,
      *          "message": "List of groups",
      *          "status": 200,
      *          "data": [
      *              {
      *              "groupName": "test",
      *              "groupDescription": "test",
      *              "users": [
      *                  {
      *                  "firstName": "Gourav",
      *                  "_id": "5f0b4386589f6f1834ff40e2"
      *                  },
      *                  {
      *                  "firstName": "Vikas",
      *                  "_id": "5f0b553ba17c955020d19142"
      *                  }
      *              ],
      *              "_id": "5f10a15be7cb394914faadc1",
      *              "groupId": "u8hIPtxOX",
      *              "createdBy": {
      *                  "firstName": "Vikas",
      *                  "_id": "5f0b553ba17c955020d19142"
      *           },
      *              "createdAt": "2020-07-16T18:50:03.845Z",
      *              "updatedAt": "2020-07-16T18:50:03.845Z",
      *           "__v": 0
      *              },
      *              {
      *              "groupName": "Test Gourav",
      *              "groupDescription": "Test Gourav",
      *              "users": [
      *                  {
      *                  "firstName": "Gourav",
      *                  "_id": "5f0b4386589f6f1834ff40e2"
      *                  },
      *                  {
      *                  "firstName": "Vikas",
      *                  "_id": "5f0b553ba17c955020d19142"
      *                  },
      *                  {
      *                  "firstName": "vivek",
      *                  "_id": "5f11dee0ec68be3578bb61bf"
      *                  }
      *              ],
      *              "_id": "5f133dfcec68be3578bb61c9",
      *              "groupId": "fE_lKwYm5",
      *              "createdBy": {
      *                  "firstName": "Gourav",
      *                  "_id": "5f0b4386589f6f1834ff40e2"
      *              },
      *              "createdAt": "2020-07-18T18:22:52.993Z",
      *              "updatedAt": "2020-07-18T18:22:52.993Z",
      *              "__v": 0
      *              },
      *          ]
      *      }
      *
      */
    // params: groupId.
    app.get(`${baseUrl}/getAllUsersForAGroup`, auth.isAuthorized, groupController.getAllUsersForAGroup);
    /**
      * @apiGroup groups
      * @apiVersion  1.0.0
      * @api {get} /api/v1/groups/:groupId/getAllUsersForAGroup [Get list of users in a group]
      * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
      * @apiParam {String} groupId The groupId should be passed as the URL parameter
      *
      *
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      *
      * @apiSuccessExample {object} Success-Response:
      *    {
      *          "error": false,
      *          "message": "List of users in a group",
      *          "status": 200,
      *          "data": {
      *              "groupName": "test",
      *              "groupDescription": "test",
      *              "users": [
      *              {
      *                  "firstName": "Gourav",
      *                  "_id": "5f0b4386589f6f1834ff40e2"
      *              },
      *              {
      *                  "firstName": "Vikas",
      *                  "_id": "5f0b553ba17c955020d19142"
      *              }
      *              ],
      *              "_id": "5f10a15be7cb394914faadc1",
      *              "groupId": "u8hIPtxOX",
      *              "createdBy": {
      *              "firstName": "Vikas",
      *              "_id": "5f0b553ba17c955020d19142"
      *              },
      *              "createdAt": "2020-07-16T18:50:03.845Z",
      *              "updatedAt": "2020-07-16T18:50:03.845Z",
      *              "__v": 0
      *          }
      *          }
      */
    // params: groupId.
    app.get(`${baseUrl}/getSingleGroupDetails`, auth.isAuthorized, groupController.getSingleGroupDetails);
    /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/:groupId/details [Get single user].
     *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} groupId The groupId should be passed as the URL parameter
	 *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *    {
     *           "error": false,
     *           "message": "group Details Found",
     *           "status": 200,
     *           "data": {
     *               "groupName": "test",
     *               "groupDescription": "test",
     *               "users": [
     *               {
     *                   "firstName": "Gourav",
     *                   "_id": "5f0b4386589f6f1834ff40e2"
     *               },
     *               {
     *                   "firstName": "Vikas",
     *                   "_id": "5f0b553ba17c955020d19142"
     *               }
     *               ],
     *               "_id": "5f10a15be7cb394914faadc1",
     *               "groupId": "u8hIPtxOX",
     *               "createdBy": {
     *               "firstName": "Vikas",
     *               "_id": "5f0b553ba17c955020d19142"
     *               },
     *               "createdAt": "2020-07-16T18:50:03.845Z",
     *               "updatedAt": "2020-07-16T18:50:03.845Z",
     *               "__v": 0
     *           }
     *           }
     *
     *       `      }
     *   }
     *   @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *   "error": true,
	 *   "message": "Error Occured.",
	 *   "status": 500,
	 *   "data": null
	 *  }
     */

    app.post(`${baseUrl}/createGroup`, auth.isAuthorized, groupController.createGroup);

    /**
     * @api {post} /api/v1/groups/createGroup [Api to create group]
     * @apiVersion 1.0.0
     * @apiGroup groups
     *
     *
     * @apiParam {String} groupName groupName of the group passed as a body parameter
     * @apiParam {String} groupDescription groupDescription of the group passed as a body parameter
     * @apiParam {String} users users of the group passed as a body parameter
     * @apiParam {String} createdBy userId of the user who created the group  passed as a body parameter

     * @apiParam {String} authToken of the user passed as a body parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *           "error": false,
     *           "message": "List of groups",
     *           "status": 200,
     *           "data": [
     *               {
     *               "groupName": "test",
     *               "groupDescription": "test",
     *               "users": [
     *                   {
     *                   "firstName": "Gourav",
     *                   "_id": "5f0b4386589f6f1834ff40e2"
     *                   },
     *                   {
     *                   "firstName": "Vikas",
     *                   "_id": "5f0b553ba17c955020d19142"
     *                   }
     *               ],
     *               "_id": "5f10a15be7cb394914faadc1",
     *               "groupId": "u8hIPtxOX",
     *               "createdBy": {
     *                   "firstName": "Vikas",
     *                   "_id": "5f0b553ba17c955020d19142"
     *               },
     *               "createdAt": "2020-07-16T18:50:03.845Z",
     *               "updatedAt": "2020-07-16T18:50:03.845Z",
     *               "__v": 0
     *               },
     *               {
     *               "groupName": "Test Gourav",
     *               "groupDescription": "Test Gourav",
     *               "users": [
     *                   {
     *                   "firstName": "Gourav",
     *                   "_id": "5f0b4386589f6f1834ff40e2"
     *                   },
     *                   {
     *                   "firstName": "Vikas",
     *                   "_id": "5f0b553ba17c955020d19142"
     *                   },
     *                   {
     *                   "firstName": "vivek",
     *                   "_id": "5f11dee0ec68be3578bb61bf"
     *                   }
     *               ],
     *               "_id": "5f133dfcec68be3578bb61c9",
     *               "groupId": "fE_lKwYm5",
     *               "createdBy": {
     *                   "firstName": "Gourav",
     *                   "_id": "5f0b4386589f6f1834ff40e2"
     *               },
     *               "createdAt": "2020-07-18T18:22:52.993Z",
     *               "updatedAt": "2020-07-18T18:22:52.993Z",
     *               "__v": 0
     *               },
     *           ]
     *           }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400/500/403,
     *      "data":null
     *    }
     */


    app.put(`${baseUrl}/:groupId/updateGroup`, auth.isAuthorized, groupController.updateGroup);
    /**
    * @api {put} /api/v1/groups/:groupId/updateGroup [Api to update group]
    * @apiVersion 1.0.0
    * @apiGroup groups
    *
    * @apiParam {String} authToken of the user passed as a body parameter
    * @apiParam {String} groupId of the group passed as a body parameter
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    *   "error":false,
    *   "message":"group Is Edited Successfully",
    *   "status":200,
    *   "data": [
    *              "n": 1,
    *              "nModified": 1,
    *               "ok": 1
    *           ]
    *  }
    *   @apiErrorExample {json} Error-Response:
    *    {
    *      "error":true,
    *      "message":"Error Occured",
    *      "status":400/500/403,
    *      "data":null
    *    }
    */
    app.get(`${baseUrl}/:groupId/groupOutstandingLent`, groupController.groupOutstandingLent);

    app.get(`${baseUrl}/:groupId/groupOutstandingSpent`, groupController.groupOutstandingSpent);

}