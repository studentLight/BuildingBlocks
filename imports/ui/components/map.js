import { Meteor } from 'meteor/meteor';
import { Parks } from '../../api/collections/parks.js';
import { mapStylingForBigMap } from '../../api/googleMapStyle.js';
import '../components/map.html';

var arrayOfParks = [];
var activeInfoWindow;
function addMarkers() {
    GoogleMaps.ready('map', function (map) {
      parks_objects = [];
      markerClusterer = new MarkerClusterer(map.instance, parks_objects);
      var name;
      for (i = 0; i < arrayOfParks.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          arrayOfParks[i].obj.GeographicalPosition.lat,
          arrayOfParks[i].obj.GeographicalPosition.lon),
        map: map.instance,
        name: arrayOfParks[i].obj.Name,
        });
        let infowindow = new google.maps.InfoWindow({
          maxWidth: 250
        });
        google.maps.event.addListener(marker, 'click', (function(marker) {
          return function(evt) {
            if(activeInfoWindow != undefined){
              activeInfoWindow.close();
            }
            Session.set('parkCoordinates', [this.position.lat(), this.position.lng()] );
            var content = '<div>' + 
            '<h5 class="center-align">' + this.name + '</h5>' +
            '<div class="center-align">' +
            '<a class="waves-effect waves-light btn" class="center-align" href="parkPage">Programmera</a>' +
            '</div>' +
            '</div>';
          infowindow.setContent(content);
          infowindow.open(map, marker);
          activeInfoWindow = infowindow;
          }
        })(marker));
      parks_objects.push(marker);
      }

      var mcOptions = {
        imagePath: 'images/markerClusterer/m',
        gridSize: 80,
        maxZoom: 14,
      };
    
      markerClusterer = new MarkerClusterer(map.instance, parks_objects,  mcOptions);
    });
  }

Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });
});



Template.map.helpers({

  loadMarkers(){
    var parks = Parks.find().fetch();
    arrayOfParks = parks;
  },
  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return mapStylingForBigMap();
    }
  },
});

//checks if map is ready and creates markers
Template.map.onCreated(function () {
  addMarkers();
});