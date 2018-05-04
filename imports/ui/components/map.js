import '../components/map.html';

//konstiga merge conflicts
Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });
});


//let LatLng = new google.maps.LatLng(59.33, 18.07) 

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
    
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(59.338408, 18.054466),
          map: map.instance
      })
  

    var playdisabled = '../images/light-bulb-dark.png';
    var playenabled = '../images/light-bulb-color.png';

    var icons = {
      playOn: {
        icon: {
          playenabled,
          scaledSize: new google.maps.Size(10, 10)
        }
      },
      playOff: {
        icon: {
          playdisabled,
          scaledSize: new google.maps.Size(10, 10)
        }
      }
    };
    var parks = [
      /*{//tegnerlunden
        position: new google.maps.LatLng(59.338374, 18.054490),
        type: 'playOn',
        parkname: 'Tegnérlunden',
      }*/
      , {//obslunden parklek
        position: new google.maps.LatLng(59.341571, 18.056179),
        type: 'playOn',
        parkname: 'Observatorielunden Parklek'
      }, {//obslunden övre
        position: new google.maps.LatLng(59.342324, 18.054718),
        type: 'playOff',
        parkname: 'Obslunden Övre'
      }, {//sabbatsparken
        position: new google.maps.LatLng(59.338160, 18.043147),
        type: 'playOn',
        parkname: 'Sabbatsparken'
      }, {//vasaparken
        position: new google.maps.LatLng(59.340098, 18.042035),
        type: 'playOff',
        parkname: 'Vasaparken'
      }, {//kungsholms strand
        position: new google.maps.LatLng(59.335399, 18.042602),
        type: 'playOn',
        parkname: 'Kungsholms Strand'
      }
    ];

    // Create markers.
    parks.forEach(function (park) {
      var marker = new google.maps.Marker({
        position: park.position,
        //icon: icons[park.type].icon,
        map: map.instance
      });
    });

    let contentstring = '<div id="content" style="text-align: center">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h4 id="firstHeading" class="firstHeading">Tegnerlunden</h1>' +
      '<div id="bodyContent">' +
      '<p>Lekplatsen ligger i utkanten av parken Tegnérlunden vid Upplandsgatan. Lekplatsen har ett lekhus med rutsch, gungor (för små och stora barn) och sandlåda.</p>' +
      '</div>' +
      '<a href="parkPage" class="waves-effect waves-light btn">Börja koda</a>' +
      '</div>';

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    let infowindow = new google.maps.InfoWindow({
      content: contentstring,
      maxWidth: 250,
    });
/*
    parks.forEach(function (park) {
      marker.addListener(map.instance, 'click', function (park) {
        infowindow.setContent(park.parkname);
        infowindow.open(map.instance, marker);
      })
      let infowindow = new google.maps.InfoWindow({
        content: park.parkname,
        maxWidth: 250,
      })
    })
*/
  });
});

/*
  //url to fetch all parks in stockholms stad
  const sthlmapi = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes/9da341e4-bdc6-4b51-9563-e65ddc2f7434/ServiceUnits/json?apikey=83cc8184e26f48369d22259c7c016825';
   
  var myList = document.querySelector('ul');

  //stockholms stad fetch api parks
  fetch(sthlmapi)
        .then(res => res.json())
        .then((out) => {
            
            for (var i = 0; i < out.length; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = out[i].Name;
                myList.appendChild(listItem);
            }

    }).catch(err => console.error(err));

*/
