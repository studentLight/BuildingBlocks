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
            //koordinaterna som visas när kartan laddas
          center: new google.maps.LatLng(59.338292, 18.054504),
          zoom: 17
        };
      }
    }
  });

  //testkod för att se att kartan skapats i consolen
  Template.map.onCreated(function() {  
    GoogleMaps.ready('map', function(map) {
       console.log("I'm ready!");
    });
  });
  