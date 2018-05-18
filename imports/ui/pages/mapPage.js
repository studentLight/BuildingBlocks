import './mapPage.html';
import '../components/navbar.js';
import '../components/map.js'

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

var sunrise;
var sunset;

function extractTimeStamp(response){
  sunrise = response.data.sys.sunrise;
  sunset = response.data.sys.sunset;
  var realTime = Date.now() / 1000;
  var boolean = ( (sunrise < realTime) || (realTime < sunset) );
  Session.set("itIsDayTime", boolean)
}

Template.mapPage.helpers({



  sunApiConnection(){
    HTTP.call( 'GET', 'http://api.openweathermap.org/data/2.5/weather?q=Stockholm,SE&appid=61c11c501e37eb677159e92abc7a327d', {
    // params: {
    //
    // }
    }, function( error, response ) {
      if ( error ) {
        console.log("error", error );
      } else {

        extractTimeStamp(response);
      }
    });
  }

});
