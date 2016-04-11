var trind = angular.module('trind', ['ngRoute']);

window.fbAsyncInit = function() {
    FB.init({
      appId      : '485587434980626',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  FB.init({
    appId  : '485587434980626',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : true  // parse XFBML
  });

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


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
      redirectTo: '/home'
    });
});
