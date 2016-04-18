trind.controller('MemoriesController', [ '$http', '$scope', function($http, $scope){

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });


        var currentToken = localStorage.getItem('tokenToken');
        var userID = localStorage.getItem('userID');
        // var eventID = localStorage.getItem('eventID');
        var theEventID = localStorage.getItem('theEventID');
        console.log(theEventID);


        $http.get('https://still-waters-14036.herokuapp.com/stashed/?token=' + currentToken).then(function successCallback(response){
          console.log('memories', response);
            $scope.yourMemories = response.data;
            console.log($scope.yourMemories);

        });
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

        // if (!hasLiked) {
        //     hasLiked = true;
        //     $scope.liked = 'cool';
        //     $scope.likeCount += 1;
        // }
        // else {
        //     hasLiked = false;
        //     $scope.liked = 'Like';
        //     $scope.likeCount -= 1;
        // }

  }]);
