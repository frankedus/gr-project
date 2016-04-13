'use strict';

app.factory('sendMessage', function ($http) {
    function addNewMessage (data) {
      $http.post('/db/digitalpros', data)
    }

    return {
      addNewMessage: addNewMessage,
    }
});
