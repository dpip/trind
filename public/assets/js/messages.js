trind.controller('MessagesController', [ '$http', '$scope', function($http, $scope){

  $(document).ready(function () {
      $("#home-drop-search-input-box").hide();
      $('.trind-main-header-search-icon').click(function () {
        $("#home-drop-search-input-box").toggle();

      });
  });

  var currentToken = localStorage.getItem('tokenToken');

  $http.get('https://still-waters-14036.herokuapp.com/conversations?token=' + currentToken ).success(function(data){
    console.log(data);

        $scope.conversations = data;

 });
 }]);
