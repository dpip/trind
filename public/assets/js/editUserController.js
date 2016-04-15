trind.controller('editUserController', [ '$http', '$scope', function($http, $scope){

  var userID = localStorage.getItem('userID');
  var currentToken = localStorage.getItem('tokenToken');

  // $scope.editUserInfo = {
  // 	"user": {
  //   "name": userName,
  //   "email": userEmail,
  //   "interests": userInterests,
  //   "summary": userSummary
  //     }
  // };
  $http.get('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
    console.log(response.data);
    $scope.editUserImage = response.data.photo_url;
    $('.edit-user-user-name').val(response.data.name);
    $('.edit-user-user-email').val(response.data.email);
    $('.edit-user-user-interests').val(response.data.interests);
    $('.edit-user-user-summary').val(response.data.summary);

  }, function errorCallback(response){
    console.log('hate', response)
  });



  $scope.editUserInfo = function(){
    var param = {user:{email:$('.edit-user-user-email').val(), name:$('.edit-user-user-name').val(), summary:$('.edit-user-user-summary').val()}}
    console.log(param);

    $http.put('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken, param).then(function successCallback(response){
    console.log('put', response);
    }, function errorCallback(response){
    console.log('not put', response);
    });
  };

  $scope.deleteUser = function(){
    $http.delete('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
    console.log('deleted', response);
    }, function errorCallback(response){
    console.log('not deleted', response);
    });
  };


}]);
