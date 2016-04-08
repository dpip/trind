trind.controller('HomeController', [ '$http', '$scope', function($http, $scope){

      // Gets the event json from Damian and repeats through home page
      $http.get('https://still-waters-14036.herokuapp.com/events').success(function(data){
        console.log(data);
        $scope.stuff = data;
    });

      // restrict E... The directive can appear only as HTML element.
    var controllers = {};
              $scope.GetDetailView = function ($scope) {
                  trind.directive('detailsDirective', function () {
                      return {
                          restrict: 'E',
                          templateUrl: '/details'
                      }
                      console.log(close);
                  });
              };

          controllers.DetailsController = function ($scope) {

          };




      // Drops search bar on click.... would love this functionality to happen on scroll
    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });
    });

}]);
