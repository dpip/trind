trind.controller('MemoriesController', [ '$http', '$scope', function($http, $scope){




  var currentToken = localStorage.getItem('tokenToken');
  var userID = localStorage.getItem('userID');
  // var eventID = localStorage.getItem('eventID');
  var theEventID = localStorage.getItem('theEventID');
  console.log(theEventID);



  $http.get('https://still-waters-14036.herokuapp.com/memories/?token=' + currentToken).then(function successCallback(response){
    console.log('memories', response);
      $scope.yourMemories = response.data;
      console.log($scope.yourMemories);


  });






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


    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });

    });

  }]);
