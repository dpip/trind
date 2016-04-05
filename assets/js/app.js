var trind = angular.module("trind", ['ngRoute']);

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
    .when('/Me', {
      templateUrl: 'me.html',
      controller: 'HomeController'
    })
            .when('/memories', {
              templateUrl: 'memories.html',
              controller: 'HomeController'
            })
            .when('/messages', {
              templateUrl: 'messages.html',
              controller: 'HomeController'
            })
            .when('/message', {
              templateUrl: 'message.html',
              controller: 'HomeController'
            })
    .when('/create', {
      templateUrl: 'create.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
