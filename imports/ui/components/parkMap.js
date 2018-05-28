import '../components/parkMap.html';

import { LightPosts } from '../../api/collections/lightPosts.js';
import { changeColor } from '../../api/collections/lightPosts.js';
import { mapStylingForSmallMap } from '../../api/googleMapStyle.js';
import { getColor } from '../../api/collections/lightPosts.js';

function setMarkersColorString(rgbColor){
  var whitePinColor = "F0FFF0";
  var redPinColor = "FF0000";
  var greenPinColor = "008000";
  var bluePinColor = "0000FF";

  if(rgbColor[0]==1){
    return redPinColor;

  }else if(rgbColor[1]==1){
    return greenPinColor;

  }else if(rgbColor[2]==1){
    return bluePinColor;
  }else{
    return whitePinColor;
  }
}
function createPinImage(i){
  var rgbColor = getColor(i+1);
  var pinColor = setMarkersColorString(rgbColor);
  var pinImage = "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=glyphish_lightbulb|"+ pinColor;
  return pinImage;
}

//konstiga merge conflicts
Meteor.startup(function () {
  GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry' });

});

Template.parkMap.helpers({

  parkMapOptions: function () {
    var coords = Session.get('parkCoordinates');
    if( coords == undefined){
      FlowRouter.go('mapPage');
    }

    if (GoogleMaps.loaded()) {
      return mapStylingForSmallMap(coords);
    }
  }
});


var activeInfoWindow;
Template.parkMap.onCreated(function () {
  GoogleMaps.ready('parkMap', function (parkMap) {

    var coords = Session.get('parkCoordinates');
    if( coords == undefined){
      FlowRouter.go('mapPage');
    }


    lights_objects = [];
    var lights = LightPosts.find().fetch();
    lights = lights[0].lamps;
    for (var i = 0; i < lights.length; i++){

      pinImage = createPinImage(i);

      console.log(lights[i][0]);

      var lightName = ""+lights[i][0];

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(lights[i][1], lights[i][2]),
        map: parkMap.instance,
        title:""+lights[i][0],
        label: {
          text: lightName,
          color: "#eb3a44",
          fontSize: "24px",
          fontWeight: "bold",
          top: "50px",
        },
        icon: {
          url: pinImage,
          scaledSize: new google.maps.Size(55, 55),
        }
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
            '<p id="sound">' + "Ljudsensor: " + lights[(this.title -1)][5] + ' </p>'+
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
