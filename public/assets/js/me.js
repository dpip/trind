trind.controller('MeController', [ '$http', '$location', '$scope', function($http, $location, $scope){


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

    $scope.userPhoto = userInfo.photo_url;
    $scope.userName = userInfo.name;
    $scope.userEmail = userInfo.email;
    $scope.userSummary = userInfo.summary;
  });


  $scope.logOut = function() {
  $http.get('https://still-waters-14036.herokuapp.com/logout?token=' + currentToken).then(function successCallback(logout){
    console.log('log out prompt', logout);
    localStorage.setItem('userID', "");
    localStorage.setItem('tokenToken', "");
    localStorage.setItem('userPhoto', "");
    $window.localStorage.clear();
    window.location.replace('#/land');

  });
};


  }]);
