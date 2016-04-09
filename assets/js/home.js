var showDetails;

trind.controller('HomeController',  [ '$http', '$scope', function($http, $scope){

      // Gets the event json from Damian and repeats through home page
      $http.get('https://still-waters-14036.herokuapp.com/events').success(function(data){
        console.log(data);
        $scope.stuff = data;


    // var eventDetail = "events"


      $scope.details = function(index) {
        console.log("ya there?");
        showDetails = index
      };

      $scope.eventDetail = data.events;

});


      // Drops search bar on click.... would love this functionality to happen on scroll
    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

}]);
