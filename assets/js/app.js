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

    .otherwise({
      redirectTo: '/home'
    });
});
