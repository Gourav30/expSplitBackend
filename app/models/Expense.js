'use strict'

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

//const User = mongoose.model('User');

let expenseSchema = new Schema({
  //  _id:mongoose.Schema.Types.ObjectId,
    expenseId: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    groupId: {
        type: String,
        required: true,
    },
    expenseTitle:{
        type: String,
        required: true,
        default: ''
    },
    expenseDescription: {
        type: String,
        required: true,
        default: ''
    },
    expenseAmount: {
        type: Number,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // firstName: [{
    //     user:{type: mongoose.Schema.Types.ObjectId, ref:'User', default: ''},
    // }
    // ],
    paidBy: [{
        user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
        amountLent: Number
    }
    ],
    usersInvolved: [{
        user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
        amountSpent: Number
    }
    ]
},
    {
        timestamps: true
    });


mongoose.model('Expense', expenseSchema);