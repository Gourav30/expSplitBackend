const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const tokenLib = require("./tokenLib.js");
const check = require('./checkLib');

let setServer = (server) => {

    let allOnlineUsers = [];

    let io = socketio.listen(server);

    let myIo = io.of('')

    myIo.on('connection', (socket) => {

        socket.emit("verifyUser", "Some data");
        // code to verify the user and make him online

        //listen to set User Code Start

        socket.on('set-user', (authToken) => {

            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {

                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else {

                    console.log("user is verified..setting details");
                    let currentUser = user.data;
                    // setting socket user id
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} has Logged in successfully`);

                    let userObject = { userId: currentUser.userId, fullName: fullName }
                    allOnlineUsers.push(userObject);
                    console.log(allOnlineUsers);

                    // // setting room name
                    socket.room = ''
                    // joining chat-group room.
                    socket.join(socket.room)
                    socket.to(socket.room).broadcast.emit('online-user-list', allOnlineUsers);

                }


            })

        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log('\x1b[33m', "user is disconnected", '\x1b[0m');
            console.log(socket.userId);

            var removeIndex = allOnlineUsers.map(function (user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex, 1)

            console.log('\x1b[36m', allOnlineUsers, '\x1b[0m');

            socket.leave(socket.room)
            socket.to(socket.room).broadcast.emit('online-user-list', allOnlineUsers);

        }) // end of on disconnect
    })
}

module.exports = {
    setServer: setServer
}