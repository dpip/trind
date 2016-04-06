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
