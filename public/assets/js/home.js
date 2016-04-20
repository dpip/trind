var showDetails;
var toMemories;
var unseen;
trind.controller('HomeController',  [ '$http', '$location', '$scope', function($http, $location, $scope){

  // +++++++++++ token in localStorage ++++++++++
    var currentToken = localStorage.getItem('tokenToken');
    var facebookToken =  localStorage.getItem('facebookToken');
    var facebookUserID = localStorage.getItem('facebookUserID');
    var firstTime = localStorage.getItem('firstTime');

  // +++++++++++ id in local storage +++++++
    var userID = localStorage.getItem('userID');
    var userPhoto = localStorage.getItem('userPhoto');
    var theEventID = localStorage.getItem('theEventID');
  // ++++++++++++++++++ login ++++++++++++++++++++++

      $('.getting-started-modal').hide();
      $('.getting-started-background').hide();

      if(firstTime === "yes") {
        $('.getting-started-background').show();
        $('.getting-started-modal').show();
      };

      $('.getting-started-background').click(function(e){
          $(this).hide();
          $('.getting-started-modal').hide();
        })

      $('.getting-started-modal').click(function(e){
          $(this).hide();
          $('.getting-started-background').hide();
        })

        $scope.clearFirstTime = function () {
          if(firstTime === "yes") {
            localStorage.setItem('firstTime', "no");
            $location.path('/create');
          };
          $location.path('/create');

        };

      // Gets the event json from Damian and repeats through home page
      $http.get('https://still-waters-14036.herokuapp.com/events?token=' + currentToken).success(function(data){
        console.log('home page data', data);
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

          var unseen;
          $http.get('https://still-waters-14036.herokuapp.com/total_messages_not_viewed?token=' + currentToken ).success(function(data){
            console.log(data);
            $scope.unseen = data.not_viewed;
            console.log(unseen);
            });

            // this closes get request
        });


$(function(){
  setInterval(unseen, 1000);
});

function unseen() {
  $http.get('https://still-waters-14036.herokuapp.com/total_messages_not_viewed?token=' + currentToken ).success(function(data) {

    //   console.log(data);

      if (data.not_viewed === 0 ) {
          $scope.unseen = "";
      }

      else if(data.not_viewed > 0) {
          $scope.unseen = data.not_viewed;

      }
            });
    };

      // Drops search bar on click.... would love this functionality to happen on scroll
    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

}]);
