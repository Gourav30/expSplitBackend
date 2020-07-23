define({ "api": [
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/expenses/:expenseId/details",
    "title": "[Get single expense details].",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseId",
            "description": "<p>The expenseId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"expense Details Found\",\n     \"status\": 200,\n     \"data\": {\n         \"expenseTitle\": \"Trip of Delhi\",\n         \"expenseDescription\": \"trip of delhi\",\n         \"_id\": \"5f187838db306a08949dbed1\",\n         \"expenseId\": \"t0BRSld0G\",\n         \"groupId\": \"xSB4Xa6aL\",\n         \"expenseAmount\": 3000,\n         \"createdBy\": {\n             \"firstName\": \"Gourav\",\n             \"_id\": \"5f0b4386589f6f1834ff40e2\"\n         },\n         \"paidBy\": [\n             {\n                 \"_id\": \"5f187838db306a08949dbed2\",\n                 \"user\": {\n                     \"firstName\": \"Gourav\",\n                     \"_id\": \"5f0b4386589f6f1834ff40e2\"\n                 },\n                 \"amountLent\": 3000\n             }\n         ],\n         \"usersInvolved\": [\n             {\n                 \"_id\": \"5f187838db306a08949dbed3\",\n                 \"user\": {\n                     \"firstName\": \"Gourav\",\n                     \"_id\": \"5f0b4386589f6f1834ff40e2\"\n                 },\n                 \"amountSpent\": 1000\n             },\n             {\n                 \"_id\": \"5f187838db306a08949dbed4\",\n                 \"user\": {\n                     \"firstName\": \"Vikas\",\n                     \"_id\": \"5f0b553ba17c955020d19142\"\n                 },\n                 \"amountSpent\": 1000\n             },\n             {\n                 \"_id\": \"5f187838db306a08949dbed5\",\n                 \"user\": {\n                     \"firstName\": \"vivek\",\n                     \"_id\": \"5f11dee0ec68be3578bb61bf\"\n                 },\n                 \"amountSpent\": 1000\n             }\n         ],\n         \"createdAt\": \"2020-07-22T17:32:40.114Z\",\n         \"updatedAt\": \"2020-07-22T17:32:40.114Z\",\n         \"__v\": 0\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Error Occured.\",\n  \"status\": 500,\n  \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expenseRoute.js",
    "groupTitle": "expenses",
    "name": "GetApiV1ExpensesExpenseidDetails"
  },
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/expenses/view/all",
    "title": "[Get all expenses].",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"List of Expenses\",\n     \"status\": 200,\n     \"data\": [\n         {\n             \"expenseTitle\": \"Trip of Delhi\",\n             \"expenseDescription\": \"trip of delhi\",\n             \"_id\": \"5f187838db306a08949dbed1\",\n             \"expenseId\": \"t0BRSld0G\",\n             \"groupId\": \"xSB4Xa6aL\",\n             \"expenseAmount\": 3000,\n             \"createdBy\": {\n                 \"firstName\": \"Gourav\",\n                 \"_id\": \"5f0b4386589f6f1834ff40e2\"\n             },\n             \"paidBy\": [\n                 {\n                     \"_id\": \"5f187838db306a08949dbed2\",\n                     \"user\": {\n                         \"firstName\": \"Gourav\",\n                         \"_id\": \"5f0b4386589f6f1834ff40e2\"\n                     },\n                     \"amountLent\": 3000\n                 }\n             ],\n             \"usersInvolved\": [\n                 {\n                     \"_id\": \"5f187838db306a08949dbed3\",\n                     \"user\": \"5f0b4386589f6f1834ff40e2\",\n                     \"amountSpent\": 1000\n                 },\n                 {\n                     \"_id\": \"5f187838db306a08949dbed4\",\n                     \"user\": \"5f0b553ba17c955020d19142\",\n                     \"amountSpent\": 1000\n                 },\n                 {\n                     \"_id\": \"5f187838db306a08949dbed5\",\n                     \"user\": \"5f11dee0ec68be3578bb61bf\",\n                     \"amountSpent\": 1000\n                 }\n             ],\n             \"createdAt\": \"2020-07-22T17:32:40.114Z\",\n             \"updatedAt\": \"2020-07-22T17:32:40.114Z\",\n             \"__v\": 0\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expenseRoute.js",
    "groupTitle": "expenses",
    "name": "GetApiV1ExpensesViewAll"
  },
  {
    "type": "post",
    "url": "/api/v1/expenses/createExpense",
    "title": "[Api to create expense]",
    "version": "1.0.0",
    "group": "expenses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseTitle",
            "description": "<p>expenseTitle of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseDescription",
            "description": "<p>expenseDescription of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseAmount",
            "description": "<p>expenseAmount of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>usserId of the user who created the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PaidBy",
            "description": "<p>the users who paid for the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usersInvolved",
            "description": "<p>the users who involved in that expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"created succesfully\",\n     \"status\": 200,\n     \"data\": {\n         \"expenseTitle\": \"Trip of Delhi\",\n         \"expenseDescription\": \"trip of delhi\",\n         \"_id\": \"5f187838db306a08949dbed1\",\n         \"expenseId\": \"t0BRSld0G\",\n         \"groupId\": \"xSB4Xa6aL\",\n         \"expenseAmount\": 3000,\n         \"createdBy\": \"5f0b4386589f6f1834ff40e2\",\n         \"paidBy\": [\n         {\n             \"_id\": \"5f187838db306a08949dbed2\",\n             \"user\": \"5f0b4386589f6f1834ff40e2\",\n             \"amountLent\": 3000\n         }\n         ],\n         \"usersInvolved\": [\n         {\n             \"_id\": \"5f187838db306a08949dbed3\",\n             \"user\": \"5f0b4386589f6f1834ff40e2\",\n             \"amountSpent\": 1000\n         },\n         {\n             \"_id\": \"5f187838db306a08949dbed4\",\n             \"user\": \"5f0b553ba17c955020d19142\",\n             \"amountSpent\": 1000\n         },\n         {\n             \"_id\": \"5f187838db306a08949dbed5\",\n             \"user\": \"5f11dee0ec68be3578bb61bf\",\n             \"amountSpent\": 1000\n         }\n         ],\n         \"createdAt\": \"2020-07-22T17:32:40.114Z\",\n         \"updatedAt\": \"2020-07-22T17:32:40.114Z\",\n         \"__v\": 0\n     }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expenseRoute.js",
    "groupTitle": "expenses",
    "name": "PostApiV1ExpensesCreateexpense"
  },
  {
    "type": "post",
    "url": "/api/v1/expenses/:expenseId/deleteExpense",
    "title": "[Api to delete expense]",
    "version": "1.0.0",
    "group": "expenses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseId",
            "description": "<p>of the expense passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"expense Is Deleted Successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured while deleting\",\n  \"status\":500,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expenseRoute.js",
    "groupTitle": "expenses",
    "name": "PostApiV1ExpensesExpenseidDeleteexpense"
  },
  {
    "type": "put",
    "url": "/api/v1/expenses/:expenseId/updateExpense",
    "title": "[Api to update expense]",
    "version": "1.0.0",
    "group": "expenses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseId",
            "description": "<p>of the expense passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"expense Is Edited Successfully\",\n \"status\":200,\n \"data\": [\n            \"n\": 1,\n            \"nModified\": 1,\n             \"ok\": 1\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expenseRoute.js",
    "groupTitle": "expenses",
    "name": "PutApiV1ExpensesExpenseidUpdateexpense"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/:groupId/details",
    "title": "[Get single user].",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The groupId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"group Details Found\",\n        \"status\": 200,\n        \"data\": {\n            \"groupName\": \"test\",\n            \"groupDescription\": \"test\",\n            \"users\": [\n            {\n                \"firstName\": \"Gourav\",\n                \"_id\": \"5f0b4386589f6f1834ff40e2\"\n            },\n            {\n                \"firstName\": \"Vikas\",\n                \"_id\": \"5f0b553ba17c955020d19142\"\n            }\n            ],\n            \"_id\": \"5f10a15be7cb394914faadc1\",\n            \"groupId\": \"u8hIPtxOX\",\n            \"createdBy\": {\n            \"firstName\": \"Vikas\",\n            \"_id\": \"5f0b553ba17c955020d19142\"\n            },\n            \"createdAt\": \"2020-07-16T18:50:03.845Z\",\n            \"updatedAt\": \"2020-07-16T18:50:03.845Z\",\n            \"__v\": 0\n        }\n        }\n\n    `      }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Error Occured.\",\n  \"status\": 500,\n  \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsGroupidDetails"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/:groupId/getAllGroupsForaUser",
    "title": "[Get list of group for a user]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The groupId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"List of groups\",\n      \"status\": 200,\n      \"data\": [\n          {\n          \"groupName\": \"test\",\n          \"groupDescription\": \"test\",\n          \"users\": [\n              {\n              \"firstName\": \"Gourav\",\n              \"_id\": \"5f0b4386589f6f1834ff40e2\"\n              },\n              {\n              \"firstName\": \"Vikas\",\n              \"_id\": \"5f0b553ba17c955020d19142\"\n              }\n          ],\n          \"_id\": \"5f10a15be7cb394914faadc1\",\n          \"groupId\": \"u8hIPtxOX\",\n          \"createdBy\": {\n              \"firstName\": \"Vikas\",\n              \"_id\": \"5f0b553ba17c955020d19142\"\n       },\n          \"createdAt\": \"2020-07-16T18:50:03.845Z\",\n          \"updatedAt\": \"2020-07-16T18:50:03.845Z\",\n       \"__v\": 0\n          },\n          {\n          \"groupName\": \"Test Gourav\",\n          \"groupDescription\": \"Test Gourav\",\n          \"users\": [\n              {\n              \"firstName\": \"Gourav\",\n              \"_id\": \"5f0b4386589f6f1834ff40e2\"\n              },\n              {\n              \"firstName\": \"Vikas\",\n              \"_id\": \"5f0b553ba17c955020d19142\"\n              },\n              {\n              \"firstName\": \"vivek\",\n              \"_id\": \"5f11dee0ec68be3578bb61bf\"\n              }\n          ],\n          \"_id\": \"5f133dfcec68be3578bb61c9\",\n          \"groupId\": \"fE_lKwYm5\",\n          \"createdBy\": {\n              \"firstName\": \"Gourav\",\n              \"_id\": \"5f0b4386589f6f1834ff40e2\"\n          },\n          \"createdAt\": \"2020-07-18T18:22:52.993Z\",\n          \"updatedAt\": \"2020-07-18T18:22:52.993Z\",\n          \"__v\": 0\n          },\n      ]\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsGroupidGetallgroupsforauser"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/:groupId/getAllUsersForAGroup",
    "title": "[Get list of users in a group]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The groupId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"List of users in a group\",\n      \"status\": 200,\n      \"data\": {\n          \"groupName\": \"test\",\n          \"groupDescription\": \"test\",\n          \"users\": [\n          {\n              \"firstName\": \"Gourav\",\n              \"_id\": \"5f0b4386589f6f1834ff40e2\"\n          },\n          {\n              \"firstName\": \"Vikas\",\n              \"_id\": \"5f0b553ba17c955020d19142\"\n          }\n          ],\n          \"_id\": \"5f10a15be7cb394914faadc1\",\n          \"groupId\": \"u8hIPtxOX\",\n          \"createdBy\": {\n          \"firstName\": \"Vikas\",\n          \"_id\": \"5f0b553ba17c955020d19142\"\n          },\n          \"createdAt\": \"2020-07-16T18:50:03.845Z\",\n          \"updatedAt\": \"2020-07-16T18:50:03.845Z\",\n          \"__v\": 0\n      }\n      }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsGroupidGetallusersforagroup"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/view/all",
    "title": "[Get all groups].",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"List of groups\",\n     \"status\": 200,\n     \"data\": [\n         {\n             \"groupName\": \"test\",\n             \"groupDescription\": \"test\",\n             \"users\": [\n                 \"5f0b4386589f6f1834ff40e2\",\n                 \"5f0b553ba17c955020d19142\"\n             ],\n             \"groupId\": \"u8hIPtxOX\",\n             \"createdBy\": \"5f0b553ba17c955020d19142\",\n             \"createdAt\": \"2020-07-16T18:50:03.845Z\",\n             \"updatedAt\": \"2020-07-16T18:50:03.845Z\",\n             \"__v\": 0\n         },\n         {\n             \"groupName\": \"Test Gourav\",\n             \"groupDescription\": \"Test Gourav\",\n             \"users\": [\n                 \"5f0b4386589f6f1834ff40e2\",\n                 \"5f0b553ba17c955020d19142\",\n                 \"5f11dee0ec68be3578bb61bf\"\n             ],\n             \"groupId\": \"fE_lKwYm5\",\n             \"createdBy\": \"5f0b4386589f6f1834ff40e2\",\n             \"createdAt\": \"2020-07-18T18:22:52.993Z\",\n             \"updatedAt\": \"2020-07-18T18:22:52.993Z\",\n             \"__v\": 0\n         },\n         {\n             \"groupName\": \"gorv test\",\n             \"groupDescription\": \"gorv test\",\n             \"users\": [\n                 \"5f0b4386589f6f1834ff40e2\",\n                 \"5f0b553ba17c955020d19142\",\n                 \"5f11dee0ec68be3578bb61bf\",\n                 \"5f167d35cb31de095cddba1a\",\n                 \"5f167ea032b9ff191866d519\"\n             ],\n             \"groupId\": \"JuHQPtdP3\",\n             \"createdBy\": \"5f1737a9d7439a39dcf33bc8\",\n             \"createdAt\": \"2020-07-21T18:52:21.220Z\",\n             \"updatedAt\": \"2020-07-21T18:52:21.220Z\",\n             \"__v\": 0\n         },\n         {\n             \"groupName\": \"gorv test\",\n             \"groupDescription\": \"gorv test\",\n             \"users\": [\n                 \"5f0b4386589f6f1834ff40e2\",\n                 \"5f0b553ba17c955020d19142\",\n                 \"5f11dee0ec68be3578bb61bf\"\n             ],\n             \"groupId\": \"REzQAKGFS\",\n             \"createdBy\": \"5f1737a9d7439a39dcf33bc8\",\n             \"createdAt\": \"2020-07-21T18:54:26.710Z\",\n             \"updatedAt\": \"2020-07-21T18:54:26.710Z\",\n             \"__v\": 0\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsViewAll"
  },
  {
    "type": "post",
    "url": "/api/v1/groups/createGroup",
    "title": "[Api to create group]",
    "version": "1.0.0",
    "group": "groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupName",
            "description": "<p>groupName of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupDescription",
            "description": "<p>groupDescription of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>users of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>userId of the user who created the group  passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"error\": false,\n         \"message\": \"List of groups\",\n         \"status\": 200,\n         \"data\": [\n             {\n             \"groupName\": \"test\",\n             \"groupDescription\": \"test\",\n             \"users\": [\n                 {\n                 \"firstName\": \"Gourav\",\n                 \"_id\": \"5f0b4386589f6f1834ff40e2\"\n                 },\n                 {\n                 \"firstName\": \"Vikas\",\n                 \"_id\": \"5f0b553ba17c955020d19142\"\n                 }\n             ],\n             \"_id\": \"5f10a15be7cb394914faadc1\",\n             \"groupId\": \"u8hIPtxOX\",\n             \"createdBy\": {\n                 \"firstName\": \"Vikas\",\n                 \"_id\": \"5f0b553ba17c955020d19142\"\n             },\n             \"createdAt\": \"2020-07-16T18:50:03.845Z\",\n             \"updatedAt\": \"2020-07-16T18:50:03.845Z\",\n             \"__v\": 0\n             },\n             {\n             \"groupName\": \"Test Gourav\",\n             \"groupDescription\": \"Test Gourav\",\n             \"users\": [\n                 {\n                 \"firstName\": \"Gourav\",\n                 \"_id\": \"5f0b4386589f6f1834ff40e2\"\n                 },\n                 {\n                 \"firstName\": \"Vikas\",\n                 \"_id\": \"5f0b553ba17c955020d19142\"\n                 },\n                 {\n                 \"firstName\": \"vivek\",\n                 \"_id\": \"5f11dee0ec68be3578bb61bf\"\n                 }\n             ],\n             \"_id\": \"5f133dfcec68be3578bb61c9\",\n             \"groupId\": \"fE_lKwYm5\",\n             \"createdBy\": {\n                 \"firstName\": \"Gourav\",\n                 \"_id\": \"5f0b4386589f6f1834ff40e2\"\n             },\n             \"createdAt\": \"2020-07-18T18:22:52.993Z\",\n             \"updatedAt\": \"2020-07-18T18:22:52.993Z\",\n             \"__v\": 0\n             },\n         ]\n         }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupsCreategroup"
  },
  {
    "type": "put",
    "url": "/api/v1/groups/:groupId/updateGroup",
    "title": "[Api to update group]",
    "version": "1.0.0",
    "group": "groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>of the group passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"group Is Edited Successfully\",\n \"status\":200,\n \"data\": [\n            \"n\": 1,\n            \"nModified\": 1,\n             \"ok\": 1\n         ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/groupRoute.js",
    "groupTitle": "groups",
    "name": "PutApiV1GroupsGroupidUpdategroup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api to get allusers.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"All User Details Found\",\n     \"status\": 200,\n     \"data\": [\n         {\n             \"_id\": \"5f0b4386589f6f1834ff40e2\",\n             \"firstName\": \"Gourav\",\n             \"lastName\": \"Kumar\",\n             \"email\": \"gourav@gourav.com\",\n             \"resetPasswordToken\": \"token\",\n             \"countryCode\": \"91\",\n             \"userId\": \"y_ByzkRoc\",\n             \"mobileNumber\": 9876543210,\n             \"createdAt\": \"2020-07-12T17:08:22.243Z\",\n             \"updatedAt\": \"2020-07-12T17:08:22.243Z\"\n         },\n         {\n             \"_id\": \"5f0b553ba17c955020d19142\",\n             \"firstName\": \"Vikas\",\n             \"lastName\": \"Kumar\",\n             \"email\": \"vikas@vikas.com\",\n             \"resetPasswordToken\": \"token\",\n             \"countryCode\": \"91\",\n             \"userId\": \"yRFIYfX56\",\n             \"mobileNumber\": 9876543219,\n             \"createdAt\": \"2020-07-12T18:23:55.193Z\",\n             \"updatedAt\": \"2020-07-12T18:23:55.193Z\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "api to generate Reset Token",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\":false,\n    \"message\":\"Reset Token sent to your Email\",\n    \"status\":200,\n    \"data\": \"Password Reset Token Sent successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\":true,\n      \"message\":\"Error Occured\",\n      \"status\":400,\n      \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n            \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjJOTEhHY1AwayIsImlhdCI6MTU5NDU3Nzg4ODQyNSwiZXhwIjoxNTk0NjY0Mjg4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6IkdvdXJhdiIsImxhc3ROYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImdvdXJhdkBnb3VyYXYuY29tIiwicmVzZXRQYXNzd29yZFRva2VuIjoidG9rZW4iLCJjb3VudHJ5Q29kZSI6IjkxIiwiX2lkIjoiNWYwYjQzODY1ODlmNmYxODM0ZmY0MGUyIiwidXNlcklkIjoieV9CeXprUm9jIiwibW9iaWxlTnVtYmVyIjo5ODc2NTQzMjEwLCJjcmVhdGVkQXQiOiIyMDIwLTA3LTEyVDE3OjA4OjIyLjI0M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTA3LTEyVDE3OjA4OjIyLjI0M1oifX0.sk0W_1_JmJd15nwZgWEHzTiunHMJ-EFjhmUuS6OMatI\",\n            \"userDetails\": {\n                   \"firstName\": \"Gourav\",\n                   \"lastName\": \"Kumar\",\n                   \"email\": \"gourav@gourav.com\",\n                   \"resetPasswordToken\": \"token\",\n                   \"countryCode\": \"91\",\n                   \"_id\": \"5f0b4386589f6f1834ff40e2\",\n                   \"userId\": \"y_ByzkRoc\",\n                   \"mobileNumber\": 9876543210,\n                   \"createdAt\": \"2020-07-12T17:08:22.243Z\",\n                   \"updatedAt\": \"2020-07-12T17:08:22.243Z\"\n            }\n      }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Login User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api to reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Your Password Is Reset Successfully\",\n     \"status\": 200,\n     \"data\": {\n         \"firstName\": \"Gourav\",\n         \"lastName\": \"Kumar\",\n         \"email\": \"gourav@gourav.com\",\n         \"resetPasswordToken\": \"\",\n         \"countryCode\": \"91\",\n         \"_id\": \"5f0b4386589f6f1834ff40e2\",\n         \"userId\": \"y_ByzkRoc\",\n         \"mobileNumber\": 9876543210,\n         \"createdAt\": \"2020-07-12T17:08:22.243Z\",\n         \"updatedAt\": \"2020-07-12T19:00:46.835Z\"\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Login User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode for the mobile number of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"User created\",\n   \"status\": 200,\n   \"data\": {\n               \"firstName\": \"Gourav\",\n               \"lastName\": \"Kumar\",\n               \"email\": \"gourav@gourav.com\",\n               \"resetPasswordToken\": \"token\",\n               \"countryCode\": \"91\",\n               \"_id\": \"5f0b4386589f6f1834ff40e2\",\n               \"userId\": \"y_ByzkRoc\",\n               \"mobileNumber\": 9876543210,\n               \"createdAt\": \"2020-07-12T17:08:22.243Z\",\n               \"updatedAt\": \"2020-07-12T17:08:22.243Z\",\n               \"__v\": 0\n\n          }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Failed To create User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/details",
    "title": "[Get single user details].",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"User Details Found\",\n     \"status\": 200,\n     \"data\": {\n         \"_id\": \"5f0b4386589f6f1834ff40e2\",\n         \"firstName\": \"Gourav\",\n         \"lastName\": \"Kumar\",\n         \"email\": \"gourav@gourav.com\",\n         \"resetPasswordToken\": \"token\",\n         \"countryCode\": \"91\",\n         \"userId\": \"y_ByzkRoc\",\n         \"mobileNumber\": 9876543210,\n         \"createdAt\": \"2020-07-12T17:08:22.243Z\",\n         \"updatedAt\": \"2020-07-12T17:08:22.243Z\"\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDetails"
  }
] });
