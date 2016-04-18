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
    var theEventID = localStorage.getItem('theEventID');
  // ++++++++++++++++++ login ++++++++++++++++++++++


  $('.getting-started-background').click(function(e){
      $(this).hide();
      $('.getting-started-modal').hide();
    })

    $('.getting-started-modal').click(function(e){
        $(this).hide();
        $('.getting-started-background').hide();
      })



      // Gets the event json from Damian and repeats through home page
      $http.get('https://still-waters-14036.herokuapp.com/events?token=' + currentToken ).success(function(data){
        console.log(data);
        $scope.stuff = data;
          // $scope.eventIDGrab = data.id
          $scope.details = function(thingId) {
            console.log("ya there?");
            showID = thingId;
            console.log(showID);

            localStorage.setItem('theEventID', showID);

            $location.path('/details');
          };

          $scope.getEvents = function(event) {
            console.log("we got there");

          };

          // scope displaying details of user!
          $scope.eventDetail = data.events;

          // pushes events to memories
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
