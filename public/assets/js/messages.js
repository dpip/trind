trind.controller('MessagesController', [ '$http', '$scope','$location', function($http, $scope, $location){

      $(document).ready(function () {
          $("#home-drop-search-input-box").hide();
          $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();

          });
      });

      var currentToken = localStorage.getItem('tokenToken');
      var otherUserName = localStorage.getItem('otherUserName');
      var firstTime = localStorage.getItem('firstTime');



      $http.get('https://still-waters-14036.herokuapp.com/conversations?token=' + currentToken ).success(function(data){

          console.log(data);
          $scope.conversations = data;
          // $scope.conversations.conversationID = data.conversation.id;

          $scope.message = function(conversationID) {
              console.log(conversationID);
              localStorage.setItem('conversationID', conversationID);
              $location.path('/message');
          };

          if(firstTime === "yes") {
            localStorage.setItem('firstTime', "no");
          };

      });

      $scope.otherUser = function(otherUserName) {
          localStorage.setItem('otherUserName', otherUserName);
          $location.path('/message');
      };

 }]);
