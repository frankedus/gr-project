'use strict';

var pg = require('pg');
var url = 'postgres://postgres:postgres@localhost:5432/digitalpros';

function dbConnection(task, callback) {
  pg.connect(url, function(err, client, done) {
    client.query(task, function(err, result) {
      done();
      callback(err, result);
    });
  });
}

module.exports = {
  dbConnection: dbConnection
};
