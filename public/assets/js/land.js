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
      "password_confirmation": "",
  }

  };


// ++++++++++++++++++email login ++++++++++++++++++++++

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

// +++++++++++++++++++sign in email+++++++++++++++++++++

  $scope.submitSignup = function() {
      console.log("Time to get Trinding");
      console.log($scope.newAccount)
      $http.post('https://still-waters-14036.herokuapp.com/users', $scope.newAccount)
      .success(function(data) {
          console.log("new account created");
          window.location.replace('#/home');
      })
  };


  $scope.goHome = function() {
      console.log(go);
      $location.url('#/home')
    };


// +++++++++++++++++initial communication with facebook+++++++++++++++++++++++
function statusChangeCallback(response) {
console.log('statusChangeCallback');
console.log(response);
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
    if (response.authResponse) {
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
