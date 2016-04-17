// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){

      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      var conversationID = localStorage.getItem('conversationID');
      var theEventID = localStorage.getItem('theEventID');
      var otherUserID = localStorage.getItem('otherUserID');
      var otherUserName = localStorage.getItem('otherUserName');

      console.log(theEventID);
      console.log(otherUserID);
      $("#home-drop-search-input-box").hide();
      $('.trind-main-header-search-icon').click(function () {
        $("#home-drop-search-input-box").toggle();
    });

      $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){

        $scope.event = response.data;
        $scope.whatIWant = response.data.event.user_id;
        var otherUserID = response.data.event.user_id;
        var otherUserName = response.data.user.name;
        console.log($scope.event);
        console.log($scope.whatIWant);
        // $scope.whatIWant = localStorage.setItem('otherUserID', otherUserID);
        localStorage.setItem('otherUserID', otherUserID);
        localStorage.setItem('otherUserName', otherUserName);

        function errorCallback(response){
          console.log('hate', response)
        };
      });

      $scope.messageNow = function() {
          console.log("wurd");

          var param = {conversation:{event_id: theEventID, recipient_id: otherUserID, sender_id: userID}};
          console.log(param);

          $http.post('https://still-waters-14036.herokuapp.com/conversations?token=' + currentToken, param).success(function (response) {
            console.log(response);
            console.log(response.id)
            var conversationID = response.id;
            localStorage.setItem('conversationID', conversationID);
            $location.path('/message');

          })
      };

      $scope.stash = function() {
        var param = {event:{searcherinterested:userID}};
        console.log(param);

          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
            console.log(response);
            // $location.path('/memories');
          });
      };

}]);
