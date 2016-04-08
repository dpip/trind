trind.controller('HomeController', [ '$http', '$scope', function($http, $scope){

      $http.get('https://still-waters-14036.herokuapp.com/events').success(function(data){

        console.log(data);
        $scope.data = data;

    });

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

}]);
