// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){

      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      // var eventID = localStorage.getItem('eventID');
      var theEventID = localStorage.getItem('theEventID');
      console.log(theEventID);

      $("#home-drop-search-input-box").hide();
      $('.trind-main-header-search-icon').click(function () {
        $("#home-drop-search-input-box").toggle();
    });


      $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){

          $scope.event = response.data;
          console.log($scope.event);

          $scope.interested = function() {
            var param = {event:{searcherinterested:userID}}

          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
            console.log(response);
            $location.path('/memories');
        });
        },
        function errorCallback(response){
          console.log('hate', response)
      };

      $scope.messagenow = function() {
          console.log("wurd");

        //   $location.path('/message');

      }


      });
}]);
