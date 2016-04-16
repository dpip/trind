"use strict";

var trind = angular.module('trind', ['ngRoute']);


trind.config(function($routeProvider) {
  $routeProvider

    .when('/land', {
      templateUrl: 'land.html',
      controller: 'LandController',
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
            .when('/editEvent', {
              templateUrl: 'editEvent.html',
              controller: 'UserEventsController'
            })
            .when('/userEvents', {
              templateUrl: 'userEvents.html',
              controller: 'UserEventsController'
            })
    .when('/create', {
      templateUrl: 'create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/land'
    });
});
