import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'
import { CoordinateHandler } from '../../api/coordinateHandler.js';
//import { LightPosts } from '../../api/lightPosts/parks.js';
import { Challenges } from '../../api/collections/challenges.js';
import { Parks } from '../../api/collections/parks.js';


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

});
