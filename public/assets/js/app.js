var trind = angular.module('trind', ['ngRoute']);

window.fbAsyncInit = function() {
  FB.init({
    appId  : '485587434980626',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : true,  // parse XFBML
    version : 'v2.4'
  });
  };


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function testAPI() {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Successful login for: ' + response.name);
         document.getElementById('status').innerHTML =
           'Thanks for logging in, ' + response.name + '!';
       });
     }








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
            .when('/editUser', {
              templateUrl: 'editUser.html',
              controller: 'editUserController'
            })
    .when('/create', {
      templateUrl: 'create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
