trind.controller('MeController', [ '$http', '$scope', function($http, $scope){

  $(document).ready(function () {
      $("#home-drop-search-input-box").hide();
      $('.trind-main-header-search-icon').click(function () {
          $("#home-drop-search-input-box").toggle();
      });

  });

  }]);