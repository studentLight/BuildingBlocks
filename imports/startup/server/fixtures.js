import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'
import { CoordinateHandler } from '../../api/coordinateHandler.js';
import { Challenges } from '../../api/collections/challenges.js';
import { Parks } from '../../api/collections/parks.js';
import { LightPosts } from '../../api/collections/lightPosts.js';


function checkIfParksAlreadyAreLoaded(){
  var amountOfParks = Parks.find().count();
  if(amountOfParks != 311){
    Parks.remove({});
    connectToStockholmsAPI();
  }
}


//kommentera bort all console skit
function insertParks(response){
  var parks = response.data;
  for(var i = 0; i < parks.length; i++) {
    var obj = parks[i];

    var x = obj.GeographicalPosition.X;
    var y = obj.GeographicalPosition.Y;

    var ch = new CoordinateHandler();
    var pos = ch.gridToGeodetic(x, y);

    
    obj.GeographicalPosition = pos;
    //console.log(obj.GeographicalPosition);

    Parks.insert({obj});
  }
}

function connectToStockholmsAPI(){
  var parks = HTTP.call( 'GET', 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes/9da341e4-bdc6-4b51-9563-e65ddc2f7434/ServiceUnits/json?apikey=83cc8184e26f48369d22259c7c016825', {
  // params: {
  //
  // }
  }, function( error, response ) {
    if ( error ) {
      console.log( error );
    } else {
      insertParks(response)
    }
  });
}

function insertChallenges(){
  Challenges.insert({ text: "Utmaning 1",
  content: "Få lyktstolpe <b>1</b> att lysa grönt om dess ljudsensor är aktiverad.",
  difficulty: "Easy", createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 2",
  content: "Få lyktstolpe <b>1</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa rött om dess ljudsensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 3",
  content: "Få lyktstolpe <b>2</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>6</b> att lysa blått om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa rött om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>1</b> att lysa blått om dess ljudsensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 4",
  content: "Få lyktstolpe <b>1</b> att lysa blått om dess ljudsensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa grönt om dess trycksensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 5",
  content: "Få lyktstolpe <b>1</b> att lysa rött om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om dess ljudsensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa blått om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>6</b> att lysa rött om dess trycksensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 6",
  content: "Få lyktstolpe <b>6</b> att lysa blått om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa blått om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>1</b> att lysa blått om dess trycksensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 7",
  content: "Få lyktstolpe <b>1</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om dess trycksensor är inaktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa rött om dess ljudsensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 8",
  content: "Få lyktstolpe <b>1</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa blått om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa blått om ljudsensor för lyktstolpe <b>6</b> är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 9",
  content: "Få lyktstolpe <b>2</b> att lysa grönt om dess ljussensor är inaktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa blått om ljudsensor för lyktstolpe <b>6</b> är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa rött om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>1</b> att lysa rött om trycksensor för lyktstolpe <b>6</b> är aktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 10",
  content: "Få lyktstolpe <b>3</b> att lysa rött om dess ljussensor är inaktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om ljudsensor för lyktstolpe <b>6</b> är inaktiverad.<br><br> Få lyktstolpe <b>6</b> att lysa rött om dess ljussensor är inaktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa rött om trycksensor för lyktstolpe <b>6</b> är inaktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 11",
  content: "Få lyktstolpe <b>1</b> att lysa grönt om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa blått om trycksensor för lyktstolpe <b>1</b> är inaktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa rött om dess ljussensor är inaktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa blått om trycksensor för lyktstolpe <b>2</b> är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa grönt om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>6</b> att lysa blått om dess trycksensor är inaktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 12",
  content: "Få lyktstolpe <b>6</b> att lysa grönt om dess ljussensor är aktiverad.<br><br> Få lyktstolpe <b>3</b> att lysa rött om ljussensor för lyktstolpe <b>4</b> är inaktiverad.<br><br> Få lyktstolpe <b>4</b> att lysa blått om dess ljudsensor är inaktiverad.<br><br> Få lyktstolpe <b>2</b> att lysa grönt om trycksensor för lyktstolpe <b>2</b> är aktiverad.<br><br> Få lyktstolpe <b>5</b> att lysa rött om dess trycksensor är aktiverad.<br><br> Få lyktstolpe <b>1</b> att lysa rött om dess ljudsensor är aktiverad.",
  difficulty: "Hard",createdAt: new Date()} );
}

Meteor.startup(() => {

  checkIfParksAlreadyAreLoaded();
  Challenges.remove({});
  insertChallenges();

  //lat:59.338209, long:18.053968, light:0, touch:0, sound:0, red:0, green:0, blue:0
  var lmp1 = [1, 59.338209, 18.053968, 0, 0, 0, 0, 0, 0];
  var lmp2 = [2, 59.337923, 18.053810, 0, 0, 0, 0, 0, 0];
  var lmp3 = [3, 59.337876, 18.054372, 0, 0, 0, 0, 0, 0];
  var lmp4 = [4, 59.337980, 18.055028, 0, 0, 0, 0, 0, 0];
  var lmp5 = [5, 59.338196, 18.055433, 0, 0, 0, 0, 0, 0];
  var lmp6 = [6, 59.338251, 18.054494, 0, 0, 0, 0, 0, 0];
  var lmp = [lmp1,lmp2,lmp3,lmp4,lmp5,lmp6];

  LightPosts.remove({});

  LightPosts.insert(
    { parkName:"Tegnerlunden", parkLat:59.338408, parkLong:18.054466, lamps:lmp }
  );
  LightPosts.insert(
    { parkName:"Kungstradgarden", parkLat:58.338408, parkLong:17.054466, lamps:lmp });

});
