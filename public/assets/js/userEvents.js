trind.controller('UserEventsController', [ '$http', '$scope', function($http, $scope){



    var currentToken = localStorage.getItem('tokenToken');
    var userID = localStorage.getItem('userID');
    var userPhoto = localStorage.getItem('userPhoto');
    var theEventID = localStorage.getItem('theEventID');
    var editEventID = localStorage.getItem('editEventID')



    $http.get('https://still-waters-14036.herokuapp.com/my_events?token=' + currentToken) .then(function successCallback(response){
      console.log('user events', response);
        $scope.userEvents = response.data;
        console.log($scope.userEvents);


    });




    $scope.editMyEvent = function(editEventID) {
      console.log(editEventID);
      window.location.replace('#/editEvent');

      localStorage.setItem('editEventID', editEventID);

    $http.get('https://still-waters-14036.herokuapp.com/events/' + editEventID + "?token=" + currentToken).then(function successCallback(response){
      console.log('get response', response);

      $('.edit-interests').val(response.data.event.interests);
      $('.edit-title').val(response.data.event.title);
      $('.edit-description').val(response.data.event.description);
      $('.edit-location').val(response.data.event.location);
      // $scope.interests = response.data.event.interests;
      // $scope.title = response.data.event.title;
      // $scope.description = response.data.event.description;
      // $scope.location = response.data.event.location;
      console.log($scope.interests);


      // $('#edit-event-interests').val(response.data.event.interests);
      // $('#edit-event-title').val(response.data.event.title);
      // $('#edit-event-description').val(response.data.event.description);
      // $('#edit-event-location').val(response.data.event.location);

    });
    }, function errorCallback(response){
    console.log('hate', response)
    };





    $scope.editEventInfo = function(){

      var param = {event:{interests:$('.edit-interests').val(), title:$('.edit-title').val(), description:$('.edit-description').val(), location:$('.edit-location').val()}}
      console.log(param);

      $http.put('https://still-waters-14036.herokuapp.com/events/' + editEventID + "?token=" + currentToken, param).then(function successCallback(response){
      console.log('put', response);
    }, function errorCallback(response){
      console.log('not put', response);
    });
  };


  $scope.deleteEvent = function(){
    $http.delete('https://still-waters-14036.herokuapp.com/events/' + editEventID + "?token=" + currentToken).then(function successCallback(response){
    console.log('deleted', response);
    }, function errorCallback(response){
    console.log('not deleted', response);
    });
  };


}]);


// $scope.editMyEvent = function() {
//
//   var param = {event:{searcherinterested:userID}}
//
// $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
//   console.log('put response', response);
//   window.location.replace('#/editEvent');
//   $scope.editSingleEvent = response.data;
//   console.log('scope response', $scope.editSingleEvent);
//
// });
// }, function errorCallback(response){
// console.log('hate', response)
// };
