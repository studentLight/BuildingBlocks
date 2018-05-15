import '../components/parkMap.html';

import { LightPosts } from '../../api/collections/lightPosts.js';

//konstiga merge conflicts
Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });
});

Template.parkMap.helpers({

  parkMapOptions: function () {

    console.log("helpers");

    var coords = Session.get('parkCoordinates');


    if( coords == undefined){
      window.location.href = "mapPage";

    }

    if (GoogleMaps.loaded()) {
      return{
        center: new google.maps.LatLng(coords[0], coords[1]),
        zoom: 17,
        minZoom: 16,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#9eec93"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ffff80"
              },
              {
                "weight": 7
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "weight": 0.5
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },

          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "transit.station.bus",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.station.rail",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      };
    }

  }
});

//checks if map is ready and creates markers


var activeInfoWindow;

Template.parkMap.onCreated(function () {
  GoogleMaps.ready('parkMap', function (parkMap) {

    var coords = Session.get('parkCoordinates');

    if( coords == undefined){
      window.location.href = "mapPage";
    }


    lights_objects = [];

    var lights = LightPosts.find().fetch();

    lights = lights[0].lamps;
    for (var i = 0; i < lights.length;i++){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lights[i][1], lights[i][2]),
      map: parkMap.instance,
      title:""+lights[i][0]
    });

    let infowindow = new google.maps.InfoWindow({
      maxWidth: 250,
    });


    google.maps.event.addListener(marker, 'click', (function(marker) {
      return function(evt) {

        console.log(activeInfoWindow != undefined);
        console.log(activeInfoWindow);
        if(activeInfoWindow != undefined){
          activeInfoWindow.close();
        }


        let contentstring = '<div id="content" style="text-align: center">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h4 id="firstHeading" class="firstHeading">' + "LampID: " + lights[(this.title -1)][0] + '</h1>' +
            '<div id="bodyContent">' +
            '<p id="light">' + "Ljussensor: " + lights[(this.title -1)][3] + '</p>'+
            '<p id="touch">' + "Trycksensor: " + lights[(this.title -1)][4] + ' </p>'+
            '<p id="sound">' + "Ljudsenspr: " + lights[(this.title -1)][5] + ' </p>'+
            '<p id="red">' + "Röd: " + lights[(this.title -1)][6] + ' </p>'+
            '<p id="green">' + "Grön: " + lights[(this.title -1)][7] + ' </p>'+
            '<p id="blue">' + "Blå: " + lights[(this.title -1)][8] + ' </p>'+
            '</div>' +
            '<a href="parkPage" class="waves-effect waves-light btn">Börja koda</a>' +
            '</div>';
      let content =  contentstring;

      infowindow.setContent(content);
      infowindow.open(parkMap, marker);

      activeInfoWindow = infowindow;

      }
    })(marker));
    lights_objects.push(marker);
    }





    });
  });


    //console.log("funkar detta ", lps);
