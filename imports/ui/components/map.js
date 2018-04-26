import '../components/map.html';

//axels maps js api key
GoogleMaps.load({ v: '3', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry,places' });

Meteor.startup(function() {  
    GoogleMaps.load();
  });
  
  Template.map.helpers({  
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });

  Template.map.onCreated(function() {  
    GoogleMaps.ready('map', function(map) {
       console.log("I'm ready!");
    });
  });
  