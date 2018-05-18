import '../components/parkMap.html';

import { LightPosts } from '../../api/collections/lightPosts.js';
import { changeColor } from '../../api/collections/lightPosts.js';
import { mapStylingForSmallMap } from '../../api/googleMapStyle.js';

//konstiga merge conflicts
Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });

});

Template.parkMap.helpers({

  parkMapOptions: function () {


    var coords = Session.get('parkCoordinates');


    if( coords == undefined){
      window.location.href = "mapPage";

    }

    if (GoogleMaps.loaded()) {
      return mapStylingForSmallMap(coords);
    }

  }
});


var activeInfoWindow;

Template.parkMap.onCreated(function () {
  GoogleMaps.ready('parkMap', function (parkMap) {

    changeColor(3, 1, 1, 1);

    var coords = Session.get('parkCoordinates');

    if( coords == undefined){
      window.location.href = "mapPage";
    }


    lights_objects = [];

    var lights = LightPosts.find().fetch();

    lights = lights[0].lamps;
    for (var i = 0; i < lights.length ;i++){
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

        if(activeInfoWindow != undefined){
          activeInfoWindow.close();
        }

        let contentstring =
        '<div id="content" style="text-align: center">' +
          '<div id="siteNotice">' +
          '</div>' +
          '<h4 id="firstHeading" class="firstHeading">' + "LampID: " + lights[(this.title -1)][0] + '</h4>' +
          '<div id="bodyContent">' +
            '<p id="light">' + "Ljussensor: " + lights[(this.title -1)][3] + '</p>'+
            '<p id="touch">' + "Trycksensor: " + lights[(this.title -1)][4] + ' </p>'+
            '<p id="sound">' + "Ljudsenspr: " + lights[(this.title -1)][5] + ' </p>'+
            '<p id="red">' + "Röd: " + lights[(this.title -1)][6] + ' </p>'+
            '<p id="green">' + "Grön: " + lights[(this.title -1)][7] + ' </p>'+
            '<p id="blue">' + "Blå: " + lights[(this.title -1)][8] + ' </p>'+
          '</div>' +
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
