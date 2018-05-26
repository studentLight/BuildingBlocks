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
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=green>grönt</font> om dess ljudsensor är aktiverad.",
  difficulty: "Easy", createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 2",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om dess trycksensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om dess ljudsensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 3",
  content: "<b>1)</b> Få lyktstolpe <b>2</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>6</b> att lysa <font color=blue>blått</font> om dess ljussensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>4</b> att lysa <font color=red>rött</font> om dess trycksensor är aktiverad.<br><br><b>4)</b> Få lyktstolpe <b>1</b> att lysa <font color=blue>blått</font> om dess ljudsensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 4",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=blue>blått</font> om dess ljudsensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om dess trycksensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>4</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>3</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.",
  difficulty: "Easy",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 5",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=red>rött</font> om dess trycksensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om dess ljudsensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>3</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>4)</b>Få lyktstolpe <b>4</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>5)</b>Få lyktstolpe <b>5</b> att lysa <font color=blue>blått</font> om dess ljussensor är aktiverad.<br><br> <b>6)</b> Få lyktstolpe <b>6</b> att lysa <font color=red>rött</font> om dess trycksensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 6",
  content: "<b>1)</b> Få lyktstolpe <b>6</b> att lysa <font color=blue>blått</font> om dess trycksensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>4</b> att lysa <font color=blue>blått</font> om dess trycksensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>2</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>5</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>5)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>6)</b> Få lyktstolpe <b>1</b> att lysa <font color=blue>blått</font> om dess trycksensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 7",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om dess trycksensor är inaktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om dess ljudsensor är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 8",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>4</b> att lysa <font color=blue>blått</font> om dess ljussensor är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>5</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>3</b> att lysa <font color=blue>blått</font> om ljudsensor i lyktstolpe <b>6</b> är aktiverad.",
  difficulty: "Medium",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 9",
  content: "<b>1)</b> Få lyktstolpe <b>2</b> att lysa <font color=green>grönt</font> om dess ljussensor är inaktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>4</b> att lysa <font color=blue>blått</font> om ljudsensor i lyktstolpe <b>6</b> är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>5</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>1</b> att lysa <font color=red>rött</font> om trycksensor i lyktstolpe <b>6</b> är aktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 10",
  content: "<b>1)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om dess ljussensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om ljudsensor i lyktstolpe <b>6</b> är inaktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>6</b> att lysa <font color=red>rött</font> om dess ljussensor är inaktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>2</b> att lysa <font color=red>rött</font> om trycksensor i lyktstolpe <b>6</b> är inaktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 11",
  content: "<b>1)</b> Få lyktstolpe <b>1</b> att lysa <font color=green>grönt</font> om dess trycksensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>2</b> att lysa <font color=blue>blått</font> om trycksensor för lyktstolpe <b>1</b> är aktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om dess ljussensor är inaktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>4</b> att lysa <font color=blue>blått</font> om trycksensor i lyktstolpe <b>2</b> är aktiverad.<br><br> <b>5)</b> Få lyktstolpe <b>5</b> att lysa <font color=green>grönt</font> om dess ljussensor är aktiverad.<br><br> <b>6)</b> Få lyktstolpe <b>6</b> att lysa <font color=blue>blått</font> om dess trycksensor är inaktiverad.",
  difficulty: "Hard",createdAt: new Date()} );

  Challenges.insert({ text: "Utmaning 12",
  content: "<b>1)</b> Få lyktstolpe <b>6</b> att lysa <font color=green>grönt</font> om dess ljussensor är aktiverad.<br><br> <b>2)</b> Få lyktstolpe <b>3</b> att lysa <font color=red>rött</font> om ljussensor i lyktstolpe <b>4</b> är inaktiverad.<br><br> <b>3)</b> Få lyktstolpe <b>4</b> att lysa <font color=blue>blått</font> om dess ljudsensor är inaktiverad.<br><br> <b>4)</b> Få lyktstolpe <b>2</b> att lysa <font color=green>grönt</font> om trycksensor i lyktstolpe <b>2</b> är aktiverad.<br><br> <b>5)</b> Få lyktstolpe <b>5</b> att lysa <font color=red>rött</font> om dess trycksensor är aktiverad.<br><br> <b>6)</b> Få lyktstolpe <b>1</b> att lysa <font color=red>rött</font> om dess ljudsensor är aktiverad.",
  difficulty: "Hard",createdAt: new Date()} );
}

function insertLightposts(){
  //name, lat, long, light, sound, push, r, g, b
  var lmp1 = [1, 59.338209, 18.053968, 0, 0, 0, 1, 0, 0];
  var lmp2 = [2, 59.337923, 18.053810, 0, 0, 0, 1, 0, 0];
  var lmp3 = [3, 59.337876, 18.054372, 0, 0, 0, 0, 1, 0];
  var lmp4 = [4, 59.337980, 18.055028, 0, 0, 0, 0, 1, 0];
  var lmp5 = [5, 59.338196, 18.055433, 0, 0, 0, 0, 0, 1];
  var lmp6 = [6, 59.338251, 18.054494, 0, 0, 0, 0, 0, 1];
  var lmp = [lmp1,lmp2,lmp3,lmp4,lmp5,lmp6];

  LightPosts.remove({});

  LightPosts.insert( { parkName:"Tegnerlunden", parkLat:59.338408, parkLong:18.054466, lamps:lmp });
  LightPosts.insert( { parkName:"Kungsan", parkLat:59.338408, parkLong:18.054466, lamps:lmp });
}

Meteor.startup(() => {

  checkIfParksAlreadyAreLoaded();
  Challenges.remove({});
  insertChallenges();
  insertLightposts();

});
