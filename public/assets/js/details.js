// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){


      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      // var eventID = localStorage.getItem('eventID');
      var theEventID = localStorage.getItem('theEventID');
      console.log(theEventID);



      $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){

          $scope.event = response.data;
          console.log($scope.event);

          $scope.interested = function() {

            var param = {event:{searcherinterested:userID}}

          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
            console.log(response);
        });
        }, function errorCallback(response){
          console.log('hate', response)
        };
      });



}]);
