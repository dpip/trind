trind.controller('MemoriesController', [ '$http', '$scope', function($http, $scope){


    var hasLiked = false;
    $scope.likeClick = function () {
        if (!hasLiked) {
            hasLiked = true;
            $scope.liked = 'cool';
            $scope.likeCount += 1;
        }
        else {
            hasLiked = false;
            $scope.liked = 'Like';
            $scope.likeCount -= 1;
        }
    };
    
    $http.get('https://still-waters-14036.herokuapp.com/memories?token=' + currentToken ).success(function(data){
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
          // localStorage.setItem('theEventID', .id );
        };


        // scope displayind details of user!!!!!!
        $scope.eventDetail = data.events;


      });

}]);
