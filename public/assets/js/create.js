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
// 
// function initialize() {
//
// var markers = [];
// var map = new google.maps.Map(document.getElementById('map-canvas'), {
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// });
//
// // var defaultBounds = new google.maps.LatLngBounds(
// // new google.maps.LatLng(-33.8902, 151.1759),
// // new google.maps.LatLng(-33.8474, 151.2631));
// // map.fitBounds(defaultBounds);
//
// // Create the search box and link it to the UI element.
// var input = /** @type {HTMLInputElement} */
// (
// document.getElementById('pac-input'));
// map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
// var searchBox = new google.maps.places.SearchBox(
// /** @type {HTMLInputElement} */
// (input));
//
// // [START region_getplaces]
// // Listen for the event fired when the user selects an item from the
// // pick list. Retrieve the matching places for that item.
// google.maps.event.addListener(searchBox, 'places_changed', function () {
//   var places = searchBox.getPlaces();
//
//   if (places.length == 0) {
//       return;
//   }
//   for (var i = 0, marker; marker = markers[i]; i++) {
//       marker.setMap(null);
//   }
//
//   // For each place, get the icon, place name, and location.
//   markers = [];
//   var bounds = new google.maps.LatLngBounds();
//   for (var i = 0, place; place = places[i]; i++) {
//       var image = {
//           url: place.icon,
//           size: new google.maps.Size(71, 71),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25)
//       };
//
//       // Create a marker for each place.
//       var marker = new google.maps.Marker({
//           map: map,
//           icon: image,
//           title: place.name,
//           position: place.geometry.location
//       });
//
//       markers.push(marker);
//
//       bounds.extend(place.geometry.location);
//   }
//
//   map.fitBounds(bounds);
// });
// // [END region_getplaces]
//
// // Bias the SearchBox results towards places that are within the bounds of the
// // current map's viewport.
// google.maps.event.addListener(map, 'bounds_changed', function () {
//   var bounds = map.getBounds();
//   searchBox.setBounds(bounds);
// });
//
// // Trigger search on button click
// document.getElementById('trigger-search').onclick = function () {
//
//   var input = document.getElementById('pac-input');
//
//   google.maps.event.trigger(input, 'focus')
//   google.maps.event.trigger(input, 'keydown', {
//       keyCode: 13
//   });
// };
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);
// +++++++++++++++++++++++++++++++++++++




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
