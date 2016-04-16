trind.controller('UserEventsController', [ '$http', '$scope', function($http, $scope){


    var currentToken = localStorage.getItem('tokenToken');
    var userID = localStorage.getItem('userID');
    var userPhoto = localStorage.getItem('userPhoto');
    var theEventID = localStorage.getItem('theEventID');



    $http.get('https://still-waters-14036.herokuapp.com/my_events?token=' + currentToken) .then(function successCallback(response){
      console.log('user events', response);
        $scope.userEvents = response.data;
        console.log($scope.userEvents);


    });

    // $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + '?token=' + currentToken) .then(function successCallback(response){
    //   console.log('user event', response);
    //     $scope.EditUserEvent = response.data;
    //     console.log($scope.EditUserEvent);
    //
    //
    // });



}]);
