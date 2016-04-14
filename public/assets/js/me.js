trind.controller('MeController', [ '$http', '$scope', function($http, $scope){

    var userID = localStorage.getItem('userID');
    var currentToken = localStorage.getItem('tokenToken');

    $scope.userID = userID;
    $scope.userName = " ";
    $scope.userEmail = " ";
    $scope.userInterests = " ";
    $scope.userSummary = " ";


  $http.get('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).success(function(userInfo){
    console.log(userID);
    console.log(currentToken);
    console.log(userInfo);

    $scope.userName = userInfo.name;
    $scope.userEmail = userInfo.email;
    $scope.userSummary = userInfo.summary;
  });

  }]);
