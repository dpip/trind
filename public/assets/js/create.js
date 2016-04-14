trind.controller('CreateController', ['$scope', '$http', function($scope, $http){

  console.log("Great");

  var currentToken = localStorage.getItem('tokenToken');
  var userID = localStorage.getItem('userID');

// angular.callbacks._0 (
  $scope.testTrind = {
      "event": {
      "user_id": userID,
      "interests": "",
      "description": "",
      "location": "",
      "token": currentToken

    }
  };
// )
  $scope.submitTrind = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind);
    $http.post('https://still-waters-14036.herokuapp.com/events?token=' + currentToken, $scope.testTrind)
    .success(function (data) {
      console.log(data);
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
