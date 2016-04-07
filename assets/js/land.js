trind.controller('LandController', [ '$http', '$scope', function($http, $scope){

  console.log("cool beans");

  $scope.landPage = {

      "email": "",
      "password": ""
  };

  $scope.submitLogin = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.landPage)
    $http.post('https://still-waters-14036.herokuapp.com/login', $scope.landPage)

    .then(function(response){
      console.log("yay");
    })
    .success(function (data) {
      window.location.replace('#/home')
    });
  };



  }]);
