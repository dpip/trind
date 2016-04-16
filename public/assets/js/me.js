trind.controller('MeController', [ '$http', '$scope', function($http, $scope){


    var userID = localStorage.getItem('userID');
    var currentToken = localStorage.getItem('tokenToken');
    var userPhoto = localStorage.getItem('userPhoto');

    $scope.userID = userID;
    $scope.userName = " ";
    $scope.userEmail = " ";
    $scope.userInterests = " ";
    $scope.userSummary = " ";
    $scope.userPhoto = userPhoto;



  $http.get('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).success(function(userInfo){
    console.log(userID);
    console.log(currentToken);
    console.log(userInfo);

    $scope.userphoto = userInfo.photo_url;
    $scope.userName = userInfo.name;
    $scope.userEmail = userInfo.email;
    $scope.userSummary = userInfo.summary;
  });

  }]);
