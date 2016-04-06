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

// $(document).ready(function() {
//     $('.trind-main-header-search-icon').click(function() {
//      top.$('.home-drop-search-bar').toggle(function() {
//        $(this).animate({
//          // style change
//        }, 500);
//        },
//        function() {
//        $(this).animate({
//          // style change back
//        }, 500);
//      });
//    });
