const express = require('express');
//const router = express.Router();
const cors = require('cors')
const userController = require("../controllers/userController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {

    //let baseUrl = `${appConfig.apiVersion}/users`;
    let baseUrl = 'http://api.gourav.tech/'

    app.use(cors())


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);

    /**
	 * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api to get allusers.
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *          {
     *               "error": false,
     *               "message": "All User Details Found",
     *               "status": 200,
     *               "data": [
     *                   {
     *                       "_id": "5f0b4386589f6f1834ff40e2",
     *                       "firstName": "Gourav",
     *                       "lastName": "Kumar",
     *                       "email": "gourav@gourav.com",
     *                       "resetPasswordToken": "token",
     *                       "countryCode": "91",
     *                       "userId": "y_ByzkRoc",
     *                       "mobileNumber": 9876543210,
     *                       "createdAt": "2020-07-12T17:08:22.243Z",
     *                       "updatedAt": "2020-07-12T17:08:22.243Z"
     *                   },
     *                   {
     *                       "_id": "5f0b553ba17c955020d19142",
     *                       "firstName": "Vikas",
     *                       "lastName": "Kumar",
     *                       "email": "vikas@vikas.com",
     *                       "resetPasswordToken": "token",
     *                       "countryCode": "91",
     *                       "userId": "yRFIYfX56",
     *                       "mobileNumber": 9876543219,
     *                       "createdAt": "2020-07-12T18:23:55.193Z",
     *                       "updatedAt": "2020-07-12T18:23:55.193Z"
     *                   }
     *               ]
     *           }
     *
	 * @apiErrorExample {json} Error-Response:
	 *
	 *          {
	 *              "error": true,
	 *              "message": "Failed To Find User Details",
	 *              "status": 500,
	 *              "data": null
	 *
     *          }
	 */


    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/details [Get single user details].
     *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId The userId should be passed as the URL parameter
	 *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *      {
     *           "error": false,
     *           "message": "User Details Found",
     *           "status": 200,
     *           "data": {
     *               "_id": "5f0b4386589f6f1834ff40e2",
     *               "firstName": "Gourav",
     *               "lastName": "Kumar",
     *               "email": "gourav@gourav.com",
     *               "resetPasswordToken": "token",
     *               "countryCode": "91",
     *               "userId": "y_ByzkRoc",
     *               "mobileNumber": 9876543210,
     *               "createdAt": "2020-07-12T17:08:22.243Z",
     *               "updatedAt": "2020-07-12T17:08:22.243Z"
     *           }
     *       }
     *   @apiErrorExample {json} Error-Response:
	 *
	 *      {
	 *          "error": true,
	 *          "message": "Error Occured.",
	 *          "status": 500,
	 *          "data": null
	 *      }
     */


    app.post(`${baseUrl}/signup`, userController.signUpFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} lastName lastName of the user. (body params) (required)
     * @apiParam {string} userName userName of the user. (body params) (required)
     * @apiParam {string} countryCode countryCode for the mobile number of user. (body params) (required)
     * @apiParam {number} mobileNumber mobileNumber of the user. (body params) (required)
     * @apiParam {email} email email of the user. (body params) (required)
     * @apiParam {password} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *   {
     *      "error": false,
     *      "message": "User created",
     *      "status": 200,
     *      "data": {
     *                  "firstName": "Gourav",
     *                  "lastName": "Kumar",
     *                  "email": "gourav@gourav.com",
     *                  "resetPasswordToken": "token",
     *                  "countryCode": "91",
     *                  "_id": "5f0b4386589f6f1834ff40e2",
     *                  "userId": "y_ByzkRoc",
     *                  "mobileNumber": 9876543210,
     *                  "createdAt": "2020-07-12T17:08:22.243Z",
     *                  "updatedAt": "2020-07-12T17:08:22.243Z",
     *                  "__v": 0
     *
     *             }
     *
     *   }
     * @apiErrorExample {json} Error-Response:
	 *      {
	 *          "error": true,
	 *          "message": "Failed To create User",
	 *          "status": 500,
	 *          "data": null
	 *      }
	 */

    // params: firstName, lastName, email, mobileNumber, password.

    app.post(this.baseUrl + "api/v1/users/login", userController.loginFunction);
    //app.post('http://api.gourav.tech/api/v1/users/login', userController.loginFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *   {
     *       "error": false,
     *       "message": "Login Successful",
     *       "status": 200,
     *       "data": {
     *               "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjJOTEhHY1AwayIsImlhdCI6MTU5NDU3Nzg4ODQyNSwiZXhwIjoxNTk0NjY0Mjg4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6IkdvdXJhdiIsImxhc3ROYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImdvdXJhdkBnb3VyYXYuY29tIiwicmVzZXRQYXNzd29yZFRva2VuIjoidG9rZW4iLCJjb3VudHJ5Q29kZSI6IjkxIiwiX2lkIjoiNWYwYjQzODY1ODlmNmYxODM0ZmY0MGUyIiwidXNlcklkIjoieV9CeXprUm9jIiwibW9iaWxlTnVtYmVyIjo5ODc2NTQzMjEwLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTEyVDE3OjA4OjIyLjI0M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTEyVDE3OjA4OjIyLjI0M1oifX0.sk0W_1_JmJd15nwZgWEHzTiunHMJ-EFjhmUuS6OMatI",
     *               "userDetails": {
     *                      "firstName": "Gourav",
     *                      "lastName": "Kumar",
     *                      "email": "gourav@gourav.com",
     *                      "resetPasswordToken": "token",
     *                      "countryCode": "91",
     *                      "_id": "5f0b4386589f6f1834ff40e2",
     *                      "userId": "y_ByzkRoc",
     *                      "mobileNumber": 9876543210,
     *                      "createdAt": "2020-07-12T17:08:22.243Z",
     *                      "updatedAt": "2020-07-12T17:08:22.243Z"
     *               }
     *         }
     *   }
     * @apiErrorExample {json} Error-Response:
	 *
	 *      {
	 *          "error": true,
	 *          "message": "Failed To Login User",
	 *          "status": 500,
	 *          "data": null
	 *      }
     */

    // params: email, password.

    app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);
    /**
     * @api {post} /api/v1/users/forgotPassword api to generate Reset Token
     * @apiVersion 1.0.0
     * @apiGroup users
     *
     * @apiParam {String} email of the user passed as a body parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *      {
     *          "error":false,
     *          "message":"Reset Token sent to your Email",
     *          "status":200,
     *          "data": "Password Reset Token Sent successfully"
     *      }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *          "error":true,
     *          "message":"Error Occured",
     *          "status":400,
     *          "data":null
     *    }
     */


    app.post(`${baseUrl}/resetPassword`, userController.resetPassword);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api to reset password.
     *
     * @apiParam {String} resetPasswordToken of the user passed as a body parameter
     * @apiParam {String} password of the user passed as a body parameter
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *      {
     *           "error": false,
     *           "message": "Your Password Is Reset Successfully",
     *           "status": 200,
     *           "data": {
     *               "firstName": "Gourav",
     *               "lastName": "Kumar",
     *               "email": "gourav@gourav.com",
     *               "resetPasswordToken": "",
     *               "countryCode": "91",
     *               "_id": "5f0b4386589f6f1834ff40e2",
     *               "userId": "y_ByzkRoc",
     *               "mobileNumber": 9876543210,
     *               "createdAt": "2020-07-12T17:08:22.243Z",
     *               "updatedAt": "2020-07-12T19:00:46.835Z"
     *           }
     *       }
     * @apiErrorExample {json} Error-Response:
	 *
	 *      {
	 *          "error": true,
	 *          "message": "Failed To Login User",
	 *          "status": 500,
	 *          "data": null
	 *      }
     */

    // params: email, password.



    app.post(`${baseUrl}/logout`, userController.logout);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout api to logout user.
     *
     * @apiParam {string} userId userId of the user. (auth headers) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *      {
     *          "error": false,
     *          "message": "Logged Out Successfully",
     *          "status": 200,
     *          "data": null
     *
     *       }
     */

    // auth token params: userId.

}
