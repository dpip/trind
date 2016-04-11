trind.controller('MeController', [ '$http', '$scope', function($http, $scope){

  $http.get('https://still-waters-14036.herokuapp.com/users').success(function(user){
    console.log(user);
    $scope.userInfo = user;
  });

  // =========two gets will screw with things! be careful=========


  }]);
