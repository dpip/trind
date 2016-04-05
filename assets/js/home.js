trind.controller('HomeController', [ '$http', '$scope', function($http, $scope){

  $http.get('https://still-waters-14036.herokuapp.com/users').success(function(data){

    console.log(data);
    $scope.data = data;


  // $scope.message = "get was got"
  // $scope.products = data.items
  //
  // $scope.reviews = products.reviews

});

  }]);
