import './mapPage.html';
import '../components/navbar.js';
import '../components/map.js'

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

var sunrise;
var sunset;

function addTwoHouersForUnixTimeStamp(timestamp){
  return (timestamp + (120 * 60 * 1000));
}

function extractTimeStamp(response){
  sunrise = response.data.sys.sunrise * 1000;
  sunset = response.data.sys.sunset * 1000;
  realTime = Date.now();
  sunrise = addTwoHouersForUnixTimeStamp(sunrise);
  sunset = addTwoHouersForUnixTimeStamp(sunset);
  realTime = addTwoHouersForUnixTimeStamp(realTime);
  console.log("sunrise", sunrise);
  console.log("sunset", sunset);
  console.log("real time", realTime);

  var boolean = ( (sunrise < realTime) && (realTime < sunset) );
  console.log(boolean);
  Session.set("itIsDayTime", boolean);
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
