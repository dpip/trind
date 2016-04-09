var trind = angular.module("trind", ['ngRoute']);

angular.module('trind', ['auth0', 'angular-storage', 'angular-jwt'])
.config(function (authProvider) {
  authProvider.init({
    domain: 'trindapp.auth0.com',
    clientID: '6v4BYLfyrhnJamIi1AELNMvrBKbTM77G'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});



// app.js
trind.config(function (authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
  // ...
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


  // We're annotating this function so that the `store` is injected correctly when this file is minified
  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
    //app.js
    authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
      console.log("Login Success");
      profilePromise.then(function(profile) {
        store.set('profile', profile);
        store.set('token', idToken);
      });
      $location.path('/');
    });

    authProvider.on('loginFailure', function() {
       // Error Callback
       console.log('no login for you')
    });
  }];

  $httpProvider.interceptors.push('jwtInterceptor');
  // ...
});

trind.config(function($routeProvider) {
  $routeProvider

});
