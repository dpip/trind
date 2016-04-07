trind.controller('CreateController', ['$scope', '$http', function($scope, $http){

  console.log("WHY");

  $scope.testTrind = {
      "event": {
      "interests": "",
      "description": "",
      "location": ""      
    }
  };

  $scope.submitTrind = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind)
    $http.post('https://still-waters-14036.herokuapp.com/events', $scope.testTrind)
    .then(function(response){
      console.log("yay");
    })
  };

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

  }]);
