trind.controller('CreateController', ['$scope', '$http', function($scope, $http){

  console.log("Great");

  var currentToken = localStorage.getItem('tokenToken');
  var userID = localStorage.getItem('userID');


  $scope.testTrind = {
      "event": {
      "user_id": userID,
      "interests": "",
      "description": "",
      "location": "",
      "title": "",
      "token": currentToken

    }
  };


// +++++++ GOOGLE MAPS SEARCH ++++++++++




  $scope.submitTrind = function() {
    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind);
    $http.post('https://still-waters-14036.herokuapp.com/events?token=' + currentToken, $scope.testTrind)
    .success(function (data) {
      console.log(data);
      window.location.replace('#/home')

    })

  };

    $(document).ready(function () {
        $("#home-drop-search-input-box").hide();
        $('.trind-main-header-search-icon').click(function () {
            $("#home-drop-search-input-box").toggle();
        });

        // ON spacebar, events bubble. 3 max
          // var emptyString = "";

        $('.create-enter-interests-input').keyup(function(e){
            // var emptyString;
            var interests = $(this).val();
            if(e.keyCode == 32){
           // user has pressed space
           $(interests).addClass("mutate-interests");
           console.log("spacebar");
           console.log(interests);

         }
        });


        // $("#test").keyup(function() {
        //                 var input = $(this);
        //
        //                 if( input.val() == "" ) {
        //                   input.css( "border", "1px solid #000" );
        //                 }
        //             });


    });


  }]);
