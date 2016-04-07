trind.controller('LandController', [ '$http', '$scope', function($http, $scope){

  console.log("WHY");

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
  };



  }]);
