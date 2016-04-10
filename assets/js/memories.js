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



  // $(document).ready(function () {
  //     $("#home-drop-search-input-box").hide();
  //     $('.trind-main-header-search-icon').click(function () {
  //         $("#home-drop-search-input-box").toggle();
  //     });
  //
  // });

  }]);
