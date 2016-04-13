trind.controller('LandController', [ '$http', '$location', '$scope', function($http, $location, $scope){
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
      "password_confirmation": ""
  }
};
  $scope.facebookAccount = {
      "uid": facebookUserID,
      "name": "",
      "email": "",
      "photo_url": "",
      "token":  facebookToken
  };
// +++++++++++ token in localStorage ++++++++++
  var currentToken = localStorage.getItem('tokenToken');
  var facebookToken =  localStorage.getItem('facebookToken');
  var facebookUserID = localStorage.getItem('facebookUserID');
// +++++++++++ id in local storage +++++++
  var userID = localStorage.getItem('userID');
// ++++++++++++++++++ login ++++++++++++++++++++++



  $scope.submitLogin = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.landPage)
    $http.post('https://still-waters-14036.herokuapp.com/login', $scope.landPage)
    .success(function (data) {
      localStorage.setItem('tokenToken', data.token);
      localStorage.setItem('userID', data.id);
      window.location.replace('#/home')
      console.log(data.token);
    })
    .error(function (data, status, headers, config) {
          alert("Incorrect Login");
          return status;
        });
  };
// +++++++++++++++++++ sign in +++++++++++++++++++++
  // submits request to server then stores them in local storage - variables are declared above
  $scope.submitSignup = function() {
      console.log("Time to get Trinding");
      console.log($scope.newAccount)
      $http.post('https://still-waters-14036.herokuapp.com/users', $scope.newAccount)
      .success(function(data) {
      localStorage.setItem('tokenToken', data.token);
      localStorage.setItem('userID', data.id);
          console.log("new account created");
          window.location.replace('#/home');
          console.log(data);
      })
  };
  $scope.goHome = function() {
      console.log(go);
      $location.url('#/home')
    };

}]);
