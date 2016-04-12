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

// +++++++++++ token in localStorage ++++++++++

  var currentToken = localStorage.getItem('tokenToken');
  var facebookToken =  localStorage.getItem('facebookToken');

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


// +++++++++++initial communication with facebook+++++++++++++++
function statusChangeCallback(response) {
console.log('statusChangeCallback');
console.log(response);
console.log(response.authResponse.accessToken);


// The response object is returned with a status field that lets the
// app know the current login status of the person.
// Full docs on the response object can be found in the documentation
// for FB.getLoginStatus().
if (response.status === 'connected') {
  // Logged into your app and Facebook.
  testAPI();
} else if (response.status === 'not_authorized') {
  // The person is logged into Facebook, but not your app.
  document.getElementById('status').innerHTML = 'Please log ' +
    'into this app.';
} else {
  // The person is not logged into Facebook, so we're not sure if
  // they are logged into this app or not.
  document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
}
}


  $scope.FBlogin = function() {
    FB.login(function(response) {

      console.log(response);
    if (response.authResponse) {
      localStorage.setItem('facebookToken', response.authResponse.accessToken);
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
      console.log(response);
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  });
  };

    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  // FB.logout(function(response) {
  //
  // });
// FB.api('/me', function(response) {
//     console.log(JSON.stringify(response));
// });

// +++++++++++++++get user token aka post to damian / login ++++++++++++++++++








}]);
