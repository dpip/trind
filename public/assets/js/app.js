"use strict";

// 
// var express = require("express");
// var app = express();
// var port = 3700;
//
// app.get("/", function(req, res){
//     res.send("It works!");
// });
//
// app.listen(port);
// console.log("Listening on port " + port);


var trind = angular.module('trind', ['ngRoute', 'ngFileUpload']);


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
     .when('/stashed', {
     templateUrl: 'stashed.html',
     controller: 'StashedController'
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
