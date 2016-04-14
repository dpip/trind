// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){


      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      var eventID = localStorage.getItem('eventID');
      var theEventID = localStorage.getItem('theEventID');

        $scope.makingMemories = function() {

        $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){
          // console.log(response.data);
          // localStorage.setItem('eventID', response.data.id);
          var param = {event:{searcherinterested:userID}}
          console.log(param);
          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
          console.log('interested', response);

        })
        }, function errorCallback(response){
          console.log('hate', response)
        });


      };

      // $scope.userInterested = function(){
      // var param = {event:{searcherinterested:userID}}
      // console.log(param);
    //   $http.put('https://still-waters-14036.herokuapp.com/events/' + eventID + "?token=" + currentToken).then(function successCallback(response){
    //   console.log('interested', response);
    //
    // })
    // };


}]);
