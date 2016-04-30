trind.controller('StashedController', [ '$http', '$location', '$scope', function($http, $location, $scope){



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


        $http.get('https://still-waters-14036.herokuapp.com/stashed/?token=' + currentToken).then(function successCallback(response){

            console.log(response);
            console.log(response.data.events);
            $scope.yourMemories = response.data;

            $scope.stashedDetails = function(eventId) {

              showID = eventId;
              localStorage.setItem('theEventID', showID);
              console.log(showID);
              $location.path('/details');

            };

        });


    var hasLiked = false;

    $scope.likeClick = function () {

      var param = {user:{rating:$(".rating-test").val()}}
      console.log(param);

      if (!hasLiked) {
          hasLiked = true;
          $scope.liked = 'true';
          $scope.likeCount += 1;
      }
      else {
          hasLiked = false;
          $scope.liked = 'false';
          $scope.likeCount -= 1;
      }


      $http.put("https://still-waters-14036.herokuapp.com/users/" + userID + "?token=" + currentToken, param).then(function successCallback(response){
      console.log('rating', response);

      },function errorCallback(response){
      console.log('not put', response);
      });
    };


}]);
