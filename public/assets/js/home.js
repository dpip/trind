var showDetails;
var toMemories;
trind.controller('HomeController',  [ '$http', '$location', '$scope', function($http, $location, $scope){

  // +++++++++++ token in localStorage ++++++++++
    var currentToken = localStorage.getItem('tokenToken');
    var facebookToken =  localStorage.getItem('facebookToken');
    var facebookUserID = localStorage.getItem('facebookUserID');
  // +++++++++++ id in local storage +++++++
    var userID = localStorage.getItem('userID');
    var userPhoto = localStorage.getItem('userPhoto');
  // ++++++++++++++++++ login ++++++++++++++++++++++

      // Gets the event json from Damian and repeats through home page
      $http.get('https://still-waters-14036.herokuapp.com/events?token=' + currentToken ).success(function(data){
        console.log(data);
        $scope.stuff = data;

          $scope.details = function(index) {
            console.log("ya there?");
            showDetails = index
            $location.path('/details');
          };

          $scope.eventDetail = data.events;


          // $scope.makingMemories = function(index) {
          //   console.log("memories");
          //   toMemories = index
          //   $location.path('/memories');
          // };
          //
          // $scope.toMemories = $scope.eventDetail;

});


      // Drops search bar on click.... would love this functionality to happen on scroll
    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

}]);
