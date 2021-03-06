const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');

const check = require('../libs/checkLib');
const nodemailer = require('nodemailer');
const mailLib = require('../libs/mailLib')

const ExpenseModel = mongoose.model('Expense');
const groupModel = mongoose.model('Group');
const userModel = mongoose.model('User');
let events = require('events');
let eventEmitter = new events.EventEmitter();
const ExpenseHistoryModel = mongoose.model('ExpenseHistory')
/*Controller Functions */


// start getSingleExpenseDetails function

let getSingleExpenseDetails = (req, res) => {

    ExpenseModel.findOne({ 'expenseId': req.params.expenseId })
        .populate({ path: 'updatedBy', select: 'firstName' })
        .populate({ path: 'paidBy.user', select: 'firstName' })
        .populate({ path: 'usersInvolved.user', select: 'firstName' })
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'expense Controller: getSingleExpenseDetails', 10)
                let apiResponse = response.generate(true, "Failed to find expense Details", 500, null);
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No expense Found', 'expense Controller: getSingleExpenseDetails')
                let apiResponse = response.generate(true, "No expense found", 404, null);
                res.send(apiResponse);
            }
            else {
                let apiResponse = response.generate(false, "expense Details Found", 200, result);
                res.send(apiResponse);
            }
        })
}

//end getSingleExpenseDetails function

/****************************************************************************************************/

// start create expense function

let createExpense = (req, res) => {

    const expenseId = shortid.generate();
    logger.info(req.body.paidBy);


    let usersInvolved = JSON.parse(req.body.usersInvolved);
    let paidBy1 = JSON.parse(req.body.paidBy);

    let newExpense = new ExpenseModel({

        expenseId: expenseId,
        groupId: req.body.groupId,
        expenseTitle: req.body.expenseTitle,
        expenseDescription: req.body.expenseDescription,
        expenseAmount: req.body.expenseAmount,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        paidBy: paidBy1,
        usersInvolved: usersInvolved

    })

        console.log("createdBy", req.body.createdBy)
        console.log("updated by", req.body.updatedBy)
        console.log("newExpense",newExpense)
    newExpense.save((err, result) => {
        if (err) {
            logger.error(err.message, 'expense Controller: createExpense', 10)
            let apiResponse = response.generate(true, "Failed to save expense Details", 500, null);
            res.send(apiResponse);
        }

        else {
            let apiResponse = response.generate(false, "created succesfully", 200, result);
            res.send(apiResponse);
            eventEmitter.emit('saveCreateExpenseHistory', result);
            eventEmitter.emit('sendExpenseCreatedMail', result);

        }

    })
}

//end createExpense function

/****************************************************************************************************/

// start updateExpense function

let updateExpense = (req, res) => {

    let usersInvolved1 = JSON.parse(req.body.usersInvolved);
    let paidBy1 = JSON.parse(req.body.paidBy);

    ExpenseModel.findOneAndUpdate({ 'expenseId': req.params.expenseId },
        { $set: { 'paidBy': [], 'usersInvolved': []}}, { new: true }).exec((err, result) => {
        if (err) {
            logger.error(err.message, 'expense Controller: updateExpense', 10)
        }
        else {
            logger.info('emptied arrays', 'expense Controller: updateExpense', result)

            ExpenseModel.findOneAndUpdate({ 'expenseId': req.params.expenseId },
                {
                    $set:
                    {
                        "expenseTitle": req.body.expenseTitle,
                        "expenseDescription": req.body.expenseDescription,
                        "expenseAmount": req.body.expenseAmount,
                        "updatedBy": req.body.updatedBy,
                        "paidBy": paidBy1,
                        "usersInvolved": usersInvolved1
                    }
                }, { new: true }
            ).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'expense Controller: updateexpense', 10)
                    let apiResponse = response.generate(true, "Failed to find expense Details", 500, null);
                    res.send(apiResponse);
                }
                else if (check.isEmpty(result)) {
                    logger.info('No expense Found', 'expense Controller: updateexpense')
                    let apiResponse = response.generate(true, "No expense found", 404, null);
                    res.send(apiResponse);
                }
                else {
                    let apiResponse = response.generate(false, "expense updated succesfully", 200, result);
                    res.send(apiResponse);

                    ExpenseModel.findOne({ 'expenseId': req.params.expenseId })
                        .populate({ path: 'createdBy', select: 'firstName' })
                        .populate({ path: 'updatedBy', select: 'firstName' })
                        .populate({ path: 'paidBy.user', select: 'firstName' })
                        .populate({ path: 'usersInvolved.user', select: 'firstName' })
                        .exec((err, data) => {
                            if (err) {
                                logger.error(err.message, 'expense Controller: updateExpense', 10)
                                let apiResponse = response.generate(true, "Failed to find expense Details", 500, null);
                                res.send(apiResponse);
                            }
                            else if (check.isEmpty(data)) {
                                logger.info('No expense Found', 'expense Controller: updateExpense')
                                let apiResponse = response.generate(true, "No expense found", 404, null);
                                res.send(apiResponse);
                            }
                            else {

                                eventEmitter.emit('saveUpdateExpenseHistory', data);
                                eventEmitter.emit('sendExpenseUpdateMail', data);
                            }
                        })
                }
            })
        }
    });


}
//end updateExpense function
/****************************************************************************************************/

//start getAllExpenses function

let getAllExpenses = (req, res) => {

    ExpenseModel.find({ 'groupId': req.params.groupId })
        .populate({ path: 'createdBy', select: 'firstName' })
        .populate({ path: 'updatedBy', select: 'firstName' })
        .populate({ path: 'paidBy.user', select: 'firstName' })
        .exec((err, result) => {

            if (err) {
                let apiResponse = response.generate(true, 'Failed to fetch list of Expenses ', 403, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Expenses Are not found', 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'List of Expenses', 200, result)
                res.send(apiResponse)
            }
        })
}

//end getAllExpenses function

let deleteExpense = (req, res) => {

    ExpenseModel.findOneAndRemove({ 'expenseId': req.params.expenseId }).select(' -__v -_id').exec((err, result) => {
        if (err) {

            console.log(err)
            logger.error(err.message, 'expenseController: deleteExpense', 10)
            let apiResponse = response.generate(true, 'Failed To delete expense', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No expense Found', 'expenseController: deleteExpense')
            let apiResponse = response.generate(true, 'No expense Found', 404, null)
            res.send(apiResponse)
        } else {

            let apiResponse = response.generate(false, 'Deleted the expense successfully', 200, result)
            res.send(apiResponse);
            eventEmitter.emit('saveDeleteExpenseHistory', result);
            eventEmitter.emit('sendExpenseDeleteMail', result);
        }
    });

}

let getExpenseHistory = (req, res) => {

    ExpenseHistoryModel.find({ 'expenseId': req.params.expenseId })
        .populate({ path: 'actionDoneBy', select: 'firstName' })
        .exec((err, result) => {

            if (err) {
                let apiResponse = response.generate(true, 'Failed to fetch Expense ', 403, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Expense not found', 500, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense History Found', 200, result)
                res.send(apiResponse)
            }
        })

}

/****************************************************************************************************/

eventEmitter.on('saveCreateExpenseHistory', (data) => {

    let newExpenseHistory = new ExpenseHistoryModel({

        expenseId: data.expenseId,
        expenseName: data.expenseTitle,
        expenseAmount: data.expenseAmount,
        actionType: "create expense",
        actionDoneBy: data.createdBy,
        message: "created expense"

    })
    newExpenseHistory.save((err, result) => {
        if (err) {
            logger.error(err.message, 'expense Controller: saveCreateExpenseHistory', 10)
        }
        else {
            logger.error("history saved succesfully", 'expense Controller: saveCreateExpenseHistory');
        }
    })

})
eventEmitter.on('saveUpdateExpenseHistory', (data) => {

    let newExpenseHistory = new ExpenseHistoryModel({

        expenseId: data.expenseId,
        expenseName: data.expenseTitle,
        expenseAmount: data.expenseAmount,
        actionType: "update Expense",
        actionDoneBy: data.updatedBy,
        message: "updated Expense"


    })
    newExpenseHistory.save((err, result) => {
        if (err) {
            logger.error(err.message, 'expense Controller: saveUpdateExpenseHistory', 10)
        }
        else {
            logger.error("history saved succesfully", 'expense Controller: saveUpdateExpenseHistory', 10)
        }
    })

})

eventEmitter.on('saveDeleteExpenseHistory', (data) => {

    let newExpenseHistory = new ExpenseHistoryModel({

        expenseId: data.expenseId,
        expenseAmount: data.expenseAmount,
        expenseName: data.expenseTitle,
        actionType: "delete Expense",
        actionDoneBy: data.updatedBy,
        message: "deleted Expense"


    })
    newExpenseHistory.save((err, result) => {
        if (err) {
            logger.error(err.message, 'expense Controller: saveDeleteExpenseHistory', 10)
        }
        else {
            logger.error("history saved succesfully", 'expense Controller: saveDeleteExpenseHistory', 10)
        }
    })

})


//send email for  expense creation code start
eventEmitter.on('sendExpenseCreatedMail', (data) => {

    if (data.groupId) {
        groupModel.findOne({ groupId: data.groupId })
            .populate({ path: 'users', select: 'firstName email' })
            .exec((err, groupDetails) => {
                if (err) {
                    logger.error('Error while finding user', 'expenseController: findUser()', 7)
                }
                else if (check.isEmpty(groupDetails)) {

                    logger.error('No User Found', 'expenseController: findUser()', 7)
                }
                else {

                    let users = groupDetails.users;
                    let toList = new Array();
                    users.forEach(element => {

                        logger.info(element.email)
                        toList.push(element.email);

                    })

                    let text = "Hey there, Expense " + data.expenseTitle + " " + "created by " + data.createdBy + " " + "with amount " + data.expenseAmount;
                    mailLib.sendMail(toList, "Expense Creation Alert", text);

                }
            });

    } else {
        logger.error('userId is missing', 'sendexpenseCreatedMail');
    }
});

//send email for expense creation code is end


//send email for  expense Updation code start
eventEmitter.on('sendExpenseUpdateMail', (data) => {

    if (data.groupId) {
        groupModel.findOne({ groupId: data.groupId })
            .populate({ path: 'users', select: 'firstName email' })
            .populate({ path: 'updatedBy', select: 'firstName' })
            .exec((err, groupDetails) => {
                if (err) {
                    logger.error('Error while finding user', 'expenseController: findUser()', 7)
                }
                else if (check.isEmpty(groupDetails)) {

                    logger.error('No User Found', 'expenseController: findUser()', 7)
                }
                else {

                    let users = groupDetails.users;
                    let toList = new Array();
                    users.forEach(element => {

                        logger.info(element.email)
                        toList.push(element.email);

                    })

                    let text = "Hey there, Expense " + data.expenseTitle + " " +"updated by " + data.updatedBy +  "with amount " + data.expenseAmount;
                    mailLib.sendMail(toList, "Expense Updation Alert", text);

                }
            });

    } else {
        logger.error('userId is missing', 'sendExpenseUpdateMail');
    }
});

//send email for expense updation code is end


//send email for  expense deletion code start
eventEmitter.on('sendExpenseDeleteMail', (data) => {

    if (data.groupId) {
        groupModel.findOne({ groupId: data.groupId })
            .populate({ path: 'users', select: 'firstName email' })
            .exec((err, groupDetails) => {
                if (err) {
                    logger.error('Error while finding user', 'expenseController: findUser()', 7)
                }
                else if (check.isEmpty(groupDetails)) {

                    logger.error('No User Found', 'expenseController: findUser()', 7)
                }
                else {

                    let users = groupDetails.users;
                    let toList = new Array();
                    users.forEach(element => {

                        logger.info(element.email)
                        toList.push(element.email);

                    })

                    let text = "Hey there, Expense " + data.expenseTitle + "deleted by " + data.updatedBy;
                    mailLib.sendMail(toList, "Expense Deletion Alert", text);

                }
            });

    } else {
        logger.error('userId is missing', 'sendExpenseDeleteMail');
    }
});

//send email for expense deletion code is end



let getUserOutstandingLent = (req, res) => {

    ExpenseModel.aggregate([{ $unwind: '$paidBy' },
    { $match: { 'paidBy.user': mongoose.Types.ObjectId(req.params.user_Id) } },
    { $group: { '_id': '$paidBy.user', 'totalAmountLent': { $sum: '$paidBy.amountLent' } } }])
        .exec((err, result) => {

            if (err) {
                logger.error(err.message, 'expense Controller: getUserOutstandingLent', 10)
                let apiResponse = response.generate(true, "Failed to fetch Details", 500, null);
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No expense Found', 'expense Controller: getUserOutstandingLent')
                let apiResponse = response.generate(true, "No records found", 404, null);
                res.send(apiResponse);
            }
            else {
                let apiResponse = response.generate(false, "data Found", 200, result);
                res.send(apiResponse);
            }

        })

}

let getUserOutstandingSpent = (req, res) => {

    ExpenseModel.aggregate([{ $unwind: '$usersInvolved' },
    { $match: { 'usersInvolved.user': mongoose.Types.ObjectId(req.params.user_Id) } },
    { $group: { '_id': '$usersInvolved.user', 'totalAmountSpent': { $sum: '$usersInvolved.amountSpent' } } }])
        .exec((err, result) => {

            if (err) {
                logger.error(err.message, 'expense Controller: getUserOutstandingSpent', 10)
                let apiResponse = response.generate(true, "Failed to fetch Details", 500, null);
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No expense Found', 'expense Controller: getUserOutstandingSpent')
                let apiResponse = response.generate(true, "No records found", 404, null);
                res.send(apiResponse);
            }
            else {
                let apiResponse = response.generate(false, "data Found", 200, result);
                res.send(apiResponse);
            }
        })
}


module.exports = {

    getSingleExpenseDetails: getSingleExpenseDetails,
    getAllExpenses: getAllExpenses,
    updateExpense: updateExpense,
    createExpense: createExpense,
    deleteExpense: deleteExpense,
    getExpenseHistory: getExpenseHistory,
    getUserOutstandingLent: getUserOutstandingLent,
    getUserOutstandingSpent: getUserOutstandingSpent,

}// end exports