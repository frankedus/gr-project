'use strict';

var users = require('./users.js');

function sendNewMessage(req, res) {
  console.log(req.body);
  users.postNewMessage(req.body, function (err, result) {
    if (err) {
      res.status(500).json({error: err});
    } else {
      res.status(201).json(result);
    }
  })
}

module.exports = {
  sendNewMessage: sendNewMessage
};
