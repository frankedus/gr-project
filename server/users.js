'use strict';

var connection = require('./database_connection.js');

function postNewMessage(data, cb) {
  var query = 'INSERT INTO users (name, email, message) VALUES (\'' + data.name + '\',\'' + data.email + '\',\'' + data.message + '\');'
  connection.dbConnection(query, cb);
}

module.exports = {
  postNewMessage: postNewMessage
};
