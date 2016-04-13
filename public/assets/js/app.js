var trind = angular.module('trind', ['ngRoute']);


//////// If 'Angular unexpected token U' have heroku refreshed before
/////// touching any code!!!!!


////////Routes are displayed below facebook oauth////////////////


// /////FACEBOOK!!!!!!!!!!!!!???????//////////
//
// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '485587434980626',
//       xfbml      : true,
//       version    : 'v2.6'
//     });
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
// FB.getLoginStatus(function(response) {
//   // Check login status on load, and if the user is
//   // already logged in, go directly to the welcome message.
//   if (response.status == 'connected') {
//     onLogin(response);
//   } else {
//     // Otherwise, show Login dialog first.
//     FB.login(function(response) {
//       onLogin(response);
//     }, {scope: 'user_friends, email'});
//   }
// });
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
//           $http.post('https://still-waters-14036.herokuapp.com/oauth', $scope.facebookAccount)
//             .success(function(data) {
//               //THE BELOW CODE SHOULD GET DAMIANS RETURN DATA AND STORE IT
//               // localStorage.setItem('tokenToken', data.token);
//               // localStorage.setItem('userID', data.id);
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
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
//
//    function testAPI() {
//        console.log('Welcome!  Fetching your information.... ');
//        FB.api('/me', function(response) {
//          console.log('Successful login for: ' + response.name);
//          document.getElementById('status').innerHTML =
//            'Thanks for logging in, ' + response.name + '!';
//        });
//      }

/////////end facebook///////////////////

trind.config(function($routeProvider) {
  $routeProvider
    .when('/land', {
      templateUrl: 'land.html',
      controller: 'LandController'
    })
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/details', {
      templateUrl: 'details.html',
      controller: 'DetailsController'
    })
    .when('/me', {
      templateUrl: 'me.html',
      controller: 'MeController'
    })
            .when('/memories', {
              templateUrl: 'memories.html',
              controller: 'MemoriesController'
            })
            .when('/messages', {
              templateUrl: 'messages.html',
              controller: 'MessagesController'
            })
            .when('/message', {
              templateUrl: 'message.html',
              controller: 'MessageController'
            })
    .when('/create', {
      templateUrl: 'create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/land'
    });
});
