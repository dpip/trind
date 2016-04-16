trind.controller('EditEventController', [ '$http', '$scope', function($http, $scope){

  var userID = localStorage.getItem('userID');
  var currentToken = localStorage.getItem('tokenToken');
  var theEventID = localStorage.getItem('theEventID');

  // $scope.editUserInfo = {
  // 	"user": {
  //   "name": userName,
  //   "email": userEmail,
  //   "interests": userInterests,
  //   "summary": userSummary
  //     }
  // };
  $http.get('https://still-waters-14036.herokuapp.com/my_events/?token=' + currentToken ).then(function successCallback(response){
    console.log(response.data);
    //
    $('#edit-event-interests').val(response.data.interests);
    $('#edit-event-title').val(response.data.title);
    $('#edit-event-description').val(response.data.description);
    $('#edit-event-location').val(response.data.location);

  }, function errorCallback(response){
    console.log('hate', response)
  });


  $scope.editEventInfo = function(){
    var param = {user:{interests:$('#edit-event-interests').val(), title:$('#edit-event-title').val(), description:$('#edit-event-description').val(), location:$('#edit-event-location').val()}}
    console.log(param);

    $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
    console.log('put', response);
  }, function errorCallback(response){
    console.log('not put', response);
  });
};


}]);
