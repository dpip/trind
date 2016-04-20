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

$scope.location = location;

console.log($('#create-map-input').val());


// +++++++ GOOGLE MAPS SEARCH ++++++++++

//point google places autocomplete to proper field
 // var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);
 // var inputFrom = document.getElementById('create-map-input');

 //use google places autocomplete to input location addy & lat/long
 // var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);
      // $(autocompleteFrom).css("font-size", "30px");

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
      //  console.log(newlat);
      //  console.log(newlng);
      //  console.log(newlocation);


         // console.log(lat, lng, address)


         $scope.testTrind = {
             "event": {
             "user_id": userID,
             "interests": "",
             "description": "",
             "location": location,
             "latitude": lat,
             "longitude": lng,
             "title": "",
             "token": currentToken

           }
         };


   });

  //  $scope.testTrind = {
  //      "event": {
  //      "user_id": userID,
  //      "interests": "",
  //      "description": "",
  //      "location": location,
  //      "latitude": lat,
  //      "longitude": lng,
  //      "title": "",
  //      "token": currentToken
   //
  //    }
  //  };


// ++++++++++ Google maps

  $scope.submitTrind = function() {

    // console.log(lat);
    // console.log(lng);
    // console.log(location);
    // console.log(lat);
    // console.log(lng);
    console.log("Hello, little Hobbit!");
    console.log($scope.testTrind);
    $http.post('https://still-waters-14036.herokuapp.com/events?token=' + currentToken, $scope.testTrind)
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
