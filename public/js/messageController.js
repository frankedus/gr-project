'use strict';

app.controller('messageController', function ($scope, $http, sendMessage) {
  $scope.sendNewMessage = function (name, email, message) {
    var sendData = {name: name, email: email, message: message};
    sendMessage.addNewMessage(sendData);
  };
});
