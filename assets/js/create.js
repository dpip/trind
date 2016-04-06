trind.controller('CreateController', [ '$http', '$scope', function($http, $scope){

    $scope.message = "get was got"

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });

    });


  }]);
