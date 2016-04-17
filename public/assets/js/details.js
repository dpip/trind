// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){

      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      // var eventID = localStorage.getItem('eventID');
      var theEventID = localStorage.getItem('theEventID');
      console.log(theEventID);

//////google maps

navigator.geolocation.getCurrentPosition(success);
function success(position) {
  console.log(position);
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '600px';

  document.querySelector('article').appendChild(mapcanvas);

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

// google maps end
      $("#home-drop-search-input-box").hide();
      $('.trind-main-header-search-icon').click(function () {
        $("#home-drop-search-input-box").toggle();
    });


      $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){

          $scope.event = response.data;
          console.log($scope.event);
          $scope.interested = function() {

            var param = {event:{searcherinterested:userID}}

          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
            console.log(response);
        });
        }, function errorCallback(response){
          console.log('hate', response)
        };
      });



}]);
