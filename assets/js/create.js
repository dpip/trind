trind.controller('CreateController', ['$scope', '$http', function($scope, $http){

  console.log("WHY");

  $scope.testTrind = {
      "events": {
      "description": ""
    }
  };

  $scope.submitTrind = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind)
    $http.post('https://still-waters-14036.herokuapp.com/events', $scope.testTrind)
    .then(function(response){
      console.log("FUCK");
    })
  };

      // {
      //       "description": $(".user-creator-description-field").val("") })





    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });
    // $(".create-trind-submit-button").click(function(){
    //       newEvent = {
    //         "description": $(".user-creator-description-field").val("")
    //       }
    //       console.log(newEvent);
      //
      // var newEvent;

      // $.post('https://still-waters-14036.herokuapp.com/events', newEvent).success(function(){
      //   console.log("CHICKEN DINNER");
      // })
      // .error(function(){
      //   console.log("dammit");
      // })
      //       });

      // $(".create-trind-submit-button-text").click(function(){
      //
      // $.post('https://still-waters-14036.herokuapp.com/events', trindPLZ).then(console.log("FUCK YES"));
      //
      // var trindPLZ = {
      // "event": {
      // "description": $(".user-creator-description-field").val("")
      // }
      // };
      //
      // });

  }]);
