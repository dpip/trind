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
    console.log($scope.testTrind);
    $http.post('https://still-waters-14036.herokuapp.com/events', $scope.testTrind)
    .success(function (data) {
      window.location.replace('#/home')
    })

  };

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

  }]);
