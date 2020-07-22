const express = require('express');
//const router = express.Router();
const expenseController = require("../controllers/expenseController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth');

module.exports.setRouter = (app) => {

    //let baseUrl = `${appConfig.apiVersion}/expenses`;
    let baseUrl = 'http://api.gourav.tech/api/v1/expenses';

    app.get(`${baseUrl}/:groupId/view/all`, expenseController.getAllExpenses);

    /**
	 * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {get} /api/v1/expenses/view/all  [Get all expenses].
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *      {
                "error": false,
                "message": "List of Expenses",
                "status": 200,
                "data": [
                    {
                        "expenseTitle": "Trip of Delhi",
                        "expenseDescription": "trip of delhi",
                        "_id": "5f187838db306a08949dbed1",
                        "expenseId": "t0BRSld0G",
                        "groupId": "xSB4Xa6aL",
                        "expenseAmount": 3000,
                        "createdBy": {
                            "firstName": "Gourav",
                            "_id": "5f0b4386589f6f1834ff40e2"
                        },
                        "paidBy": [
                            {
                                "_id": "5f187838db306a08949dbed2",
                                "user": {
                                    "firstName": "Gourav",
                                    "_id": "5f0b4386589f6f1834ff40e2"
                                },
                                "amountLent": 3000
                            }
                        ],
                        "usersInvolved": [
                            {
                                "_id": "5f187838db306a08949dbed3",
                                "user": "5f0b4386589f6f1834ff40e2",
                                "amountSpent": 1000
                            },
                            {
                                "_id": "5f187838db306a08949dbed4",
                                "user": "5f0b553ba17c955020d19142",
                                "amountSpent": 1000
                            },
                            {
                                "_id": "5f187838db306a08949dbed5",
                                "user": "5f11dee0ec68be3578bb61bf",
                                "amountSpent": 1000
                            }
                        ],
                        "createdAt": "2020-07-22T17:32:40.114Z",
                        "updatedAt": "2020-07-22T17:32:40.114Z",
                        "__v": 0
                    }
                ]
            }
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


     // params: expenseId.
    app.get(`${baseUrl}/:expenseId/details`,expenseController.getSingleExpenseDetails);
    /**
     * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {get} /api/v1/expenses/:expenseId/details [Get single expense details].
     *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} expenseId The expenseId should be passed as the URL parameter
	 *
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
     * @apiSuccessExample {object} Success-Response:
     *      {
                "error": false,
                "message": "expense Details Found",
                "status": 200,
                "data": {
                    "expenseTitle": "Trip of Delhi",
                    "expenseDescription": "trip of delhi",
                    "_id": "5f187838db306a08949dbed1",
                    "expenseId": "t0BRSld0G",
                    "groupId": "xSB4Xa6aL",
                    "expenseAmount": 3000,
                    "createdBy": {
                        "firstName": "Gourav",
                        "_id": "5f0b4386589f6f1834ff40e2"
                    },
                    "paidBy": [
                        {
                            "_id": "5f187838db306a08949dbed2",
                            "user": {
                                "firstName": "Gourav",
                                "_id": "5f0b4386589f6f1834ff40e2"
                            },
                            "amountLent": 3000
                        }
                    ],
                    "usersInvolved": [
                        {
                            "_id": "5f187838db306a08949dbed3",
                            "user": {
                                "firstName": "Gourav",
                                "_id": "5f0b4386589f6f1834ff40e2"
                            },
                            "amountSpent": 1000
                        },
                        {
                            "_id": "5f187838db306a08949dbed4",
                            "user": {
                                "firstName": "Vikas",
                                "_id": "5f0b553ba17c955020d19142"
                            },
                            "amountSpent": 1000
                        },
                        {
                            "_id": "5f187838db306a08949dbed5",
                            "user": {
                                "firstName": "vivek",
                                "_id": "5f11dee0ec68be3578bb61bf"
                            },
                            "amountSpent": 1000
                        }
                    ],
                    "createdAt": "2020-07-22T17:32:40.114Z",
                    "updatedAt": "2020-07-22T17:32:40.114Z",
                    "__v": 0
                }
            }
     *   @apiErrorExample {json} Error-Response:
	 *
	 * {
	 *   "error": true,
	 *   "message": "Error Occured.",
	 *   "status": 500,
	 *   "data": null
	 *  }
     */

    app.post(`${baseUrl}/createExpense`,auth.isAuthorized,expenseController.createExpense);

    /**
     * @api {post} /api/v1/expenses/createExpense [Api to create expense]
     * @apiVersion 1.0.0
     * @apiGroup expenses
     *
     *
     * @apiParam {String} expenseTitle expenseTitle of the expense passed as a body parameter
     * @apiParam {String} expenseDescription expenseDescription of the expense passed as a body parameter
     * @apiParam {String} expenseAmount expenseAmount of the expense passed as a body parameter
     * @apiParam {String} createdBy usserId of the user who created the expense passed as a body parameter
     * @apiParam {String} PaidBy the users who paid for the expense passed as a body parameter
     * @apiParam {String} usersInvolved the users who involved in that expense passed as a body parameter
     * @apiParam {String} authToken of the user passed as a body parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *      {
                "error": false,
                "message": "created succesfully",
                "status": 200,
                "data": {
                    "expenseTitle": "Trip of Delhi",
                    "expenseDescription": "trip of delhi",
                    "_id": "5f187838db306a08949dbed1",
                    "expenseId": "t0BRSld0G",
                    "groupId": "xSB4Xa6aL",
                    "expenseAmount": 3000,
                    "createdBy": "5f0b4386589f6f1834ff40e2",
                    "paidBy": [
                    {
                        "_id": "5f187838db306a08949dbed2",
                        "user": "5f0b4386589f6f1834ff40e2",
                        "amountLent": 3000
                    }
                    ],
                    "usersInvolved": [
                    {
                        "_id": "5f187838db306a08949dbed3",
                        "user": "5f0b4386589f6f1834ff40e2",
                        "amountSpent": 1000
                    },
                    {
                        "_id": "5f187838db306a08949dbed4",
                        "user": "5f0b553ba17c955020d19142",
                        "amountSpent": 1000
                    },
                    {
                        "_id": "5f187838db306a08949dbed5",
                        "user": "5f11dee0ec68be3578bb61bf",
                        "amountSpent": 1000
                    }
                    ],
                    "createdAt": "2020-07-22T17:32:40.114Z",
                    "updatedAt": "2020-07-22T17:32:40.114Z",
                    "__v": 0
                }
                }
     *      }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured",
     *      "status":400/500/403,
     *      "data":null
     *    }
     */


    app.put(`${baseUrl}/:expenseId/updateExpense`,auth.isAuthorized,expenseController.updateExpense);
     /**
     * @api {put} /api/v1/expenses/:expenseId/updateExpense [Api to update expense]
     * @apiVersion 1.0.0
     * @apiGroup expenses
     *
     * @apiParam {String} authToken of the user passed as a body parameter
     * @apiParam {String} expenseId of the expense passed as a body parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"expense Is Edited Successfully",
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

    app.post(`${baseUrl}/:expenseId/deleteExpense`,auth.isAuthorized,expenseController.deleteExpense);
    /**
     * @api {post} /api/v1/expenses/:expenseId/deleteExpense [Api to delete expense]
     * @apiVersion 1.0.0
     * @apiGroup expenses
     *
     *
     * @apiParam {String} authToken of the user passed as a body parameter
     * @apiParam {String} expenseId of the expense passed as a body parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
     *   "error":false,
     *   "message":"expense Is Deleted Successfully",
     *   "status":200,
     *   "data": []
     *  }
     *   @apiErrorExample {json} Error-Response:
     *    {
     *      "error":true,
     *      "message":"Error Occured while deleting",
     *      "status":500,
     *      "data":null
     *    }
     */

    app.get(`${baseUrl}/:expenseId/getExpenseHistory`,auth.isAuthorized,expenseController.getExpenseHistory);

    app.get(`${baseUrl}/:user_Id/getUserOutstandingLent`,auth.isAuthorized, expenseController.getUserOutstandingLent);

    app.get(`${baseUrl}/:user_Id/getUserOutstandingSpent`,auth.isAuthorized, expenseController.getUserOutstandingSpent);

}
