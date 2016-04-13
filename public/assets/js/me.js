trind.controller('MeController', [ '$http', '$scope', function($http, $scope){

  // +++++++++++ token in localStorage ++++++++++
    var currentToken = localStorage.getItem('tokenToken');
    var facebookToken =  localStorage.getItem('facebookToken');
    var facebookUserID = localStorage.getItem('facebookUserID');
  // +++++++++++ id in local storage +++++++
    var userID = localStorage.getItem('userID');
    var userPhoto = localStorage.getItem('userPhoto');
  // ++++++++++++++++++ login ++++++++++++++++++++++



  $http.get('https://still-waters-14036.herokuapp.com/users').success(function(user){
    console.log(user);
    $scope.userInfo = user;
  });

  // =========two gets will screw with things! be careful=========


  }]);
