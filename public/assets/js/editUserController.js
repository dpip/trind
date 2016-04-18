trind.controller('editUserController', [ '$http', '$scope', 'Upload','$location', function($http, $scope, Upload, $location){

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
    // var param = {user:{email:$('.edit-user-user-email').val(), name:$('.edit-user-user-name').val(), summary:$('.edit-user-user-summary').val()}}
    // console.log(param);
    console.log(file, $('.edit-user-user-email').val(), $('.edit-user-user-name').val());

    var formData = new FormData();
    if(file != undefined){
    formData.append('user[uploaded_file]', file);
  };
    formData.append('user[email]', $('.edit-user-user-email').val());
    formData.append('user[name]', $('.edit-user-user-name').val());

    $http({
      method: 'PUT',
      url: 'https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken,
      data: formData,
      headers: {'content-type' : undefined}
    }).then(function successCallback(response){
      $http.get('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
        console.log('new image', response.data);
        //
        $('.editFields edit-user-user-name').val(response.data.name);
        $('.me-avatar').val(response.data.photo_url);
        console.log(response.data.photo_url);
        $location.path('/me');
      }, function errorCallback(response){
        console.log('hate', response)
      })
    // document.location.reload(true)
    console.log('put', response);
  }, function errorCallback(response){
    console.log('hate', response);
  });
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

  };

  $scope.deleteUser = function(){
    $http.delete('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
    console.log('deleted', response);
    }, function errorCallback(response){
    console.log('not deleted', response);
    });
  };


}]);
