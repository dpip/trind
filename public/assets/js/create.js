trind.controller('CreateController', ['$scope', '$http', function($scope, $http){

  console.log("Great");

  var currentToken = localStorage.getItem('tokenToken');
  var userID = localStorage.getItem('userID');
  // var location = localStorage.getItem('location');
  // var lat = localStorage.getItem('latitude');
  // var lng = localStorage.getItem('longitude');
  var inputFrom = document.getElementById('create-map-input');
  // var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);
  // var newlocation = localStorage.getItem('newlocation');
  // var newlat = localStorage.getItem('newlatitude');
  // var newlng = localStorage.getItem('newlongitude');
  var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);

// $('#create-map-input').val(),
//   $scope.testTrind = {
//       "event": {
//       "user_id": userID,
//       "interests": "",
//       "description": "",
//       "location": $('inputFrom').val(),
//       "title": "",
//       "token": currentToken
//
//     }
//   };

// $scope.location = address;
$scope.location = location;


console.log($('#create-map-input').val());


// +++++++ GOOGLE MAPS SEARCH ++++++++++



   google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
       var place = autocompleteFrom.getPlace();
       var location = place.formatted_address;
       var lng = place.geometry.location.lng();
       var lat = place.geometry.location.lat();

       localStorage.setItem('newlocation', location);
       localStorage.setItem('newlatitude', lat);
       localStorage.setItem('newlongitude', lng);
       console.log(lat);
       console.log(lng);
       console.log(location);
       console.log('old above new below')

        $scope.testTrind = {
            "event": {
            "user_id": userID,
            "interests": $('#create-your-interests').val(),
            "description": $('#create-description-field').val(),
            "location": location,
            "latitude": lat,
            "longitude": lng,
            "title": $('#i-want-to').val(),
            "token": currentToken

          }
        };




   });

   $scope.testTrind = {
       "event": {
       "user_id": userID,
       "interests": "",
       "description": "",

       "title": ""
     }
   };



  $scope.submitTrind = function() {

    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind);
    $http.post('https://still-waters-14036.herokuapp.com/events?token=' + currentToken, $scope.testTrind, $scope.mapTrind)
    .then(function successCallback(response){
      console.log(response);
      window.location.replace('#/home')
 }, function errorCallback(response){
   console.log(response)
 });

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
            var hash = "#";
            var interests = $(this).val();
            if(e.keyCode == 32){
              $(this).val('#' + interests);


          //  $(interests).addClass("mutate-interests");
           console.log("spacebar");
           console.log(interests);

         }
        });



    });


  }]);
