'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var usersEndpoint = require('./users_endpoint.js');

var app = express ();

app.use(express.static('../public'));
app.use(bodyParser.json());

app.post('/db/digitalpros', usersEndpoint.sendNewMessage);

app.listen(3000, function () {
  console.log('Listening on port 3000...')
});
