// var toMemories;

trind.controller('DetailsController', [ '$http', '$location', '$scope', function($http, $location, $scope){

      var currentToken = localStorage.getItem('tokenToken');
      var userID = localStorage.getItem('userID');
      var conversationID = localStorage.getItem('conversationID');
      var theEventID = localStorage.getItem('theEventID');
      var otherUserID = localStorage.getItem('otherUserID');
      var otherUserName = localStorage.getItem('otherUserName');
      var location = localStorage.getItem('location');
      var latitude = localStorage.getItem('latitude');
      var longitude = localStorage.getItem('longitude');
      var eventLatitude = localStorage.getItem('eventLatitude');
      var eventLongitude = localStorage.getItem('eventLongitude');

        $('#stashed-modal').hide();
        $('#new-stash-button').click( function () {
          console.log('stashed');
          $('#stashed-modal').slideDown(600).slideUp(1000);
        });

      //   $("#home-drop-search-input-box").hide();
      //   $('.trind-main-header-search-icon').click(function () {
      //
      //     $("#home-drop-search-input-box").toggle();
      // });

      $http.get('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken).then(function successCallback(response){

        $scope.event = response.data;
        $scope.whatIWant = response.data.event.user_id;

        var otherUserID = response.data.event.user_id;
        var otherUserName = response.data.user.name;
        var eventLatitude = response.data.event.latitude;
        var eventLongitude = response.data.event.longitude;
        var location = response.data.event.location;
        var otherUserID = localStorage.setItem('otherUserID', otherUserID);
        var otherUserName = localStorage.setItem('otherUserName', otherUserName);

        navigator.geolocation.getCurrentPosition(success);

        function success(position) {
          var mapcanvas = document.createElement('div');
          mapcanvas.id = 'mapcontainer';
          mapcanvas.style.height = '600px';
          mapcanvas.style.width = '700px';

          document.querySelector('article').appendChild(mapcanvas);

          // var coords = new google.maps.LatLng(eventLatitude, eventLongitude);
          var coords = new google.maps.LatLng(response.data.event.latitude, response.data.event.longitude);

          var trindMapIcon = {
            url: 'assets/img/Artboard 1.png',
            scaledSize: new google.maps.Size(90, 110)
          }

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
              icon: trindMapIcon,
              map: map

          });
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success);
        } else {
          error('Geo Location is not supported');
        };

        function errorCallback(response){
          console.log('hate', response)
        };
      });

      $scope.messageNow = function() {
          // console.log("wurd");
          var otherUserID = localStorage.getItem('otherUserID');
          var param = {conversation:{event_id: theEventID, recipient_id: otherUserID, sender_id: userID}};
          // console.log(param);

          $http.post('https://still-waters-14036.herokuapp.com/conversations?token=' + currentToken, param).success(function (response) {
            // console.log(response);
            // console.log(response.id)
            var conversationID = response.id;
            localStorage.setItem('conversationID', conversationID);
            $location.path('/message');

          })
      };

      $scope.stash = function() {

        $("#new-stash-button").css("background-color", "rgba(250, 76, 6, 1)");

        var param = {event:{searcherinterested:userID}};
        console.log(param);

          $http.put('https://still-waters-14036.herokuapp.com/events/' + theEventID + "?token=" + currentToken, param).then(function successCallback(response){
            console.log(response);

            // +++++++ need a pop up "added to stashed events" ++++++++++++
            // $location.path('/memories');
          });
      };

}]);
