trind.controller('UserEventsController', [ '$http', '$scope', function($http, $scope){

  $scope.submitTrind = function() {
    console.log("User events");
    console.log($scope.userEvents);
    $http.get('https://still-waters-14036.herokuapp.com/events?token=' + currentToken, $scope.UserEvents)
    .success(function (data) {
      console.log(data);
      // window.location.replace('#/home')

    })

  };


}]);
