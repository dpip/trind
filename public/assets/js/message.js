trind.controller('MessageController', [ '$http', '$scope', function($http, $scope){

        var conversationID = localStorage.getItem('conversationID');
        var currentToken = localStorage.getItem('tokenToken');
        var userID = localStorage.getItem('userID');
        var otherUserName = localStorage.getItem('otherUserName');

          $scope.otherUserName = otherUserName;


        console.log(userID);
        //  $("#home-drop-search-input-box").hide();

        $scope.whoAmI = function(userPassed) {
          if(userPassed == userID) {
            return 'message-out';
          }
          else {
            return 'message-in';
          }
        };

        $(function(){
          setInterval(oneSecondFunction, 200);
          console.log
        });

        function oneSecondFunction() {
        $http.get('https://still-waters-14036.herokuapp.com/conversations/' + conversationID + "?token=" + currentToken).success(function(data) {

            // If you want proof we're refreshing every half-second uncomment the console.log
            // console.log(data);
            $scope.chat = data;
            localStorage.setItem('userID', userID);


        });
      };

      $scope.postMessage = function() {

        var param = {message:{author:userID, conversation_id: conversationID, body: $('.form-control').val()}}

        $http.post('https://still-waters-14036.herokuapp.com/messages?token=' + currentToken, param).then(function successCallback(data) {
          console.log("message sent", data);

          $('.form-control').val("");
        });
      };
    }]);


 //  var userInput = $("input");
 // //
 // // $(".btn-submit").click(function() {
 // //     $("input").each(function(){
 //
 //    $http.post('https://still-waters-14036.herokuapp.com/conversations/' + conversationID+ ''?token='' + currentToken)
 //            .success(function (data) {
 //            console.log("message sent")
 //        });
 //
 //     $("#YM").append("<li>" + $(this).val() + "</li>" );
 //     $http.post('https://still-waters-14036.herokuapp.com/conversations')
 //     $http.get('https://still-waters-14036.herokuapp.com/conversations/' + conversationID+ “?token=“ + currentToken)​
 //     event.preventDefault();
 //        });
 //    });


  // Different variation for User Matchinng

//   angular.module('Message.Controller', [])
//
//
// .controller('ChatController', [
//   '$scope',
//   'User',
//   'Chats',
//   'MatchesFactory',
//   'userSession',
//   '$stateParams',
//
//   function($scope, User, Chats, MatchesFactory, userSession, $stateParams) {
//
//     var matchId = $stateParams.matchId;
//     console.log('match id in chats controller - ', $stateParams);
//     console.log("ChatController: USER ", User)
//     $scope.match = MatchesFactory.get(matchId);
//
//     if($scope.match.matched[User._id] && $scope.match.matched[User._id] !== 'isMatch') {
//       var chatURL = $scope.match.matched[User._id]
//     } else if (User.matched[$scope.match._id] && User.matched[$scope.match._id] !== 'isMatch') {
//       var chatURL = User.matched[$scope.match._id];
//     } else {
//       console.log('going to set chat url')
//       chatURL = userSession.user.id + matchId;
//       MatchesFactory.updateChatURL(matchId,User._id,chatURL, function(matchWithChat) {
//         MatchesFactory.updateMatchedUsers(matchWithChat)
//           .then(function(res){
//             console.log('response made it back to chatURL!');
//           })
//       });
//       Chats.setUserAccess(chatURL,userSession.user.id,matchId);
//     }
//
//     $scope.chats = Chats.setChats(chatURL);
//     console.log('scope chats ', $scope.chats);
//
//     $scope.remove = function(chat) {
//       Chats.remove(chat);
//     };
//
//     $scope.add = function(message){
//       Chats.add($scope.chats,User.name,message,User.fbid);
//     };
//
// }]);
