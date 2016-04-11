// angular.module('ngClickExample', ['ngTouch']);

trind.controller('LandController', [ '$http', '$scope', function($http, $scope){

  console.log("cool beans");

  $scope.landPage = {

      "email": "",
      "password": ""
  };

  $scope.newAccount = {
      "user": {
      "name": "",
      "email": "",
      "password": "",
      "password_confirmation": "",
  }

  };

  $scope.submitLogin = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.landPage)
    $http.post('https://still-waters-14036.herokuapp.com/login', $scope.landPage)
    .success(function (data) {
      window.location.replace('#/home')
    })
    .error(function (data, status, headers, config) {
          alert("Incorrect Login");
          return status;
        });
  };

$scope.submitSignup = function() {
    console.log("Time to get Trinding");
    console.log($scope.newAccount)
    $http.post('https://still-waters-14036.herokuapp.com/users', $scope.newAccount)
    .success(function(data) {
        console.log("new account created");
        window.location.replace('#/home');
    })

};

$scope.FBlogin = function() {
  FB.login(function(response) {
  if (response.authResponse) {
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     console.log('Good to see you, ' + response.name + '.');
     window.location.replace('#/home');

   });
  } else {
   console.log('User cancelled login or did not fully authorize.');
  }
});
};



  }]);
