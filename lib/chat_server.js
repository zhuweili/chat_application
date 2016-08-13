/**
 * Created by user on 8/13/16.
 */
var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var nameUsed = {};
var currentRoom = {};

