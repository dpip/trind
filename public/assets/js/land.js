trind.controller('LandController', [ '$http', '$location', '$scope', function($http, $location, $scope){
  // console.log("cool beans");

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


// +++++++++++ localStorage ++++++++++

  var currentToken = localStorage.getItem('tokenToken');
  var facebookToken =  localStorage.getItem('facebookToken');
  var facebookUserID = localStorage.getItem('facebookUserID');
  var userID = localStorage.getItem('userID');
  var userPhoto = localStorage.getItem('userPhoto');


// ++++++++++++++++++ login ++++++++++++++++++++++


  $scope.submitLogin = function() {

    $http.post('https://still-waters-14036.herokuapp.com/login', $scope.landPage)
    .success(function (data) {
      localStorage.setItem('tokenToken', data.token);
      localStorage.setItem('userID', data.id);
      localStorage.setItem('userPhoto', data.photo_url);
      window.location.replace('#/home')

    })
    .error(function (data, status, headers, config) {
          alert("Incorrect Login");
          return status;
        });
  };


// +++++++++++++++++ signup +++++++++++++++++

  $scope.submitSignup = function() {

      $http.post('https://still-waters-14036.herokuapp.com/users', $scope.newAccount)
      .success(function(data) {
      localStorage.setItem('tokenToken', data.token);
      localStorage.setItem('userID', data.id);
      localStorage.setItem('firstTime', data.first_time);
          console.log("new account created");
          window.location.replace('#/home');

      })
  };
  $scope.goHome = function() {
      $location.path('#/home');
      window.location.replace('#/home');
    };


    // /////FACEBOOK!!!!!!!!!!!!!???????//////////
    //
    // window.fbAsyncInit = function() {
    //     FB.init({
    //       appId      : '485587434980626',
    //       cookie     : true,
    //       xfbml      : true,
    //       version    : 'v2.6'
    //     });
    //
    //     FB.getLoginStatus(function(response) {
    //       // Check login status on load, and if the user is
    //       // already logged in, go directly to the welcome message.
    //       if (response.status == 'connected') {
    //         onLogin(response);
    //       } else {
    //         // Otherwise, show Login dialog first.
    //         FB.login(function(response) {
    //           onLogin(response);
    //         }, {scope: 'user_friends, email'});
    //       }
    //     });
    //
    //
    //
    //     function onLogin(response) {
    //   if (response.status == 'connected') {
    //     FB.api('/me?fields=first_name', function(data) {
    //       var welcomeBlock = document.getElementById('fb-welcome');
    //       welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    //     });
    //   }
    // }
    //
    //
    //
    //     // ADD ADDITIONAL FACEBOOK CODE HERE
    //
    //     function statusChangeCallback(response) {
    //     console.log('statusChangeCallback');
    //     console.log(response);
    //     console.log(response.authResponse.accessToken);
    //     // The response object is returned with a status field that lets the
    //     // app know the current login status of the person.
    //     // Full docs on the response object can be found in the documentation
    //     // for FB.getLoginStatus().
    //     if (response.status === 'connected') {
    //       // Should let us know we're logged in
    //       testAPI();
    //     } else if (response.status === 'not_authorized') {
    //       // The person is logged into Facebook, but not trind
    //       document.getElementById('status').innerHTML = 'Please log ' +
    //         'into this app.';
    //     } else {
    //       // The person is not logged into Facebook, so we're not sure if
    //       // they are logged into this app or not.
    //       document.getElementById('status').innerHTML = 'Please log ' +
    //         'into Facebook.';
    //     }
    //     }
    //       $scope.FBlogin = function() {
    //         FB.login(function(response) {
    //           console.log(response);
    //           localStorage.setItem('facebookToken', response.authResponse.accessToken);
    //           localStorage.setItem('facebookUserID', response.authResponse.userID);
    //         if (response.authResponse) {
    //           $http.post('https://still-waters-14036.herokuapp.com/oauth'+ currentToken, $scope.facebookAccount)
    //             .success(function(data) {
    //               //THE BELOW CODE SHOULD GET DAMIANS RETURN DATA AND STORE IT
    //               localStorage.setItem('tokenToken', data.token);
    //               localStorage.setItem('userID', data.id);
    //               console.log(data);
    //               console.log("Trind facebook user created");
    //               window.location.replace('#/home');
    //           })
    //           console.log('Welcome!  Fetching your information.... ');
    //           FB.api('/me', function(response) {
    //           console.log(response);
    //          });
    //         } else {
    //          console.log('User cancelled login or did not fully authorize.');
    //         }
    //       });
    //       };
    //         FB.getLoginStatus(function(response) {
    //         statusChangeCallback(response);
    //       });
    //   };
    //
    //    function testAPI() {
    //        console.log('Welcome!  Fetching your information.... ');
    //        FB.api('/me', function(response) {
    //          console.log('Successful login for: ' + response.name);
    //          document.getElementById('status').innerHTML =
    //            'Thanks for logging in, ' + response.name + '!';
    //        });
    //      }
    //
    //
    //

}]);
