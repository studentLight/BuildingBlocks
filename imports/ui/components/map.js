
import { Parks } from '../../api/collections/parks.js';


import '../components/map.html';

Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });
});


Template.map.helpers({


  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(59.33, 18.07),
        zoom: 12,
        minZoom: 5,
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
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
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
                "visibility": "on"
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
                "visibility": "on"
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
          }
        ]
      };
    }
  }
});

//checks if map is ready and creates markers
Template.map.onCreated(function () {
  GoogleMaps.ready('map', function (map) {
    console.log('Map is ready')


    var parks = [
      ['Tegnérlunden', 59.338374, 18.0544490],
      ['Obslunden Övre', 59.342324, 18.054718],
      ['Sabbatsparken', 59.338160, 18.043147],
      ['Vasaparken', 59.340098, 18.042035],
      ['Kungsholms Strand', 59.335399, 18.042602]
    ];

    parks_objects = [];

    for (i = 0; i < parks.length; i++) {
      marker = new google.maps.Marker({
      position: new google.maps.LatLng(parks[i][1], parks[i][2]),
      map: map.instance,
      title: parks[i][0]
      });
      let infowindow = new google.maps.InfoWindow({
        maxWidth: 250,
      });
      google.maps.event.addListener(marker, 'click', (function(marker) {
        return function(evt) {
        let content = marker.getTitle() + contentstring;
        infowindow.setContent(content);
        infowindow.open(map, marker);
        }
      })(marker));
    parks_objects.push(marker);
    }


  let contentstring = '<div id="content" style="text-align: center">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h4 id="firstHeading" class="firstHeading">Tegnerlunden</h1>' +
      '<div id="bodyContent">' +
      '<p>Lekplatsen ligger i utkanten av parken Tegnérlunden vid Upplandsgatan. Lekplatsen har ett lekhus med rutsch, gungor (för små och stora barn) och sandlåda.</p>' +
      '</div>' +
      '<a href="parkPage" class="waves-effect waves-light btn">Börja koda</a>' +
      '</div>';

  });
});
