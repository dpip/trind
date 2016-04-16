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

  $scope.editUserInfo = function(file){
    var param = {user:{email:$('.edit-user-user-email').val(), name:$('.edit-user-user-name').val(), summary:$('.edit-user-user-summary').val()}}
    console.log(param);

    $http.put('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken, param).then(function successCallback(response){
    console.log('put', response);
    },
    // Upload.upload({
    //       url: '/projects',
    //       data: {file: file, 'project[name]': $scope.name, 'project[description]': $scope.description},
    //   }).then(function (resp) {
    //       console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    //
    //   }, function (resp) {
    //       console.log('Error status: ' + resp.status);
    //   }, function (evt) {
    //       var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //       console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    // });
    function errorCallback(response){
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
