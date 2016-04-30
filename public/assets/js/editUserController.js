trind.controller('editUserController', [ '$http', '$scope', 'Upload','$location', function($http, $scope, Upload, $location){

  var userID = localStorage.getItem('userID');
  var currentToken = localStorage.getItem('tokenToken');

  $('#image-uploaded-modal').hide();
  $('#file-input').on('change', function () {
    console.log('uploaded');
    $('#image-uploaded-modal').slideDown(600).slideUp(1000);
  });

  $http.get('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
    // console.log(response.data);

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
    // console.log(file, $('.edit-user-user-email').val(), $('.edit-user-user-name').val());

    var formData = new FormData();

      if(file != undefined){
      formData.append('user[uploaded_file]', file);
      alert("Saved!");
      };
      formData.append('user[email]', $('.edit-user-user-email').val());
      formData.append('user[name]', $('.edit-user-user-name').val());
      console.log(formData);
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

  };

  $scope.deleteUser = function(){
    $http.delete('https://still-waters-14036.herokuapp.com/users/' + userID + "?token=" + currentToken).then(function successCallback(response){
    console.log('deleted', response);
    }, function errorCallback(response){
    console.log('not deleted', response);
    });
  };


  $(document).ready(function () {
      $("#file-input").hide();
      $('#photo-upload-selector').click(function () {
          $("#file-input").click();

      });

  });


}]);
