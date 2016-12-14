/*Probot
Your tool against procrastination.
Final Assignment for CTH 2016
authors: Lenka, Laura and Vivien
14-12-2016*/


//-------------------//
// REQUIRED MODULES//
//------------------//

// import express
var express = require('express');
var app = express();
// import chance
var chance = require('chance').Chance();
// import node.js http
var server = require('http').Server(app);
// import socket.io
var io = require('socket.io')(server);  
// import chance
var chance = require('chance').Chance();


//setting middleware
app.use(express.static(__dirname + "/public")); //Serves resources from public folder



//------------------//
// POP UP MESSAGES//
//------------------//
        
        //database for storing the things to be randomized
        const have = ['should', 'are supposed to', 'must', 'have to'];
        const start = ['be busy', 'start', 'go back to', 'resume'];
        const verb = ['working', 'typing', 'writing'];
        const adjectives = ['energetically', 'eagerly', 'enthusiasticly'];
        const time = ['right now', 'instantly', 'right away', 'at once', 'straight away'];

        function choice(array) {            //choice function, which randomizes things
            var index = chance.natural({
                'min': 0,
                'max': array.length - 1
            });
            return array[index];

        }

        function maybe(array) {      //function for maybe, which may or may not activate
            if (chance.bool()) {
                return choice(array);
            } else {
                return '';
            }
        }

        function procrast() {       //generates a randomized message when your procrastinate
            var message = 'Hi! You ' + choice(have) + ' ' + choice(start) + ' ' + choice(verb) + ' ' + maybe(adjectives) + ' ' + choice(time) + '. ';
            return message;

        }


/* ----------------------------------
    Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file, when someone requests the server, send the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


/* -------------------
    Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
    console.log('listening on port: ' + 8088);
});


io.on('connection', function(socket) {

console.log('got a connection');
 socket.on('procrast', function() {

    // send back message
        msg = procrast();
  	io.emit('message', msg);

});});