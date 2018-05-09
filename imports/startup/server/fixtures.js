import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

//import { LightPosts } from '../../api/lightPosts/parks.js';
import { Challenges } from '../../api/collections/challenges.js';
import { Parks } from '../../api/collections/parks.js';

function insertParks(response){
  var parks = response.data;
  for(var i = 0; i < parks.length; i++) {
    var obj = parks[i];
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
  Challenges.insert({ text: "Utmaning 1", content: "Få lampa 1 att lysa grönt om dess ljudsensor är aktiverad", difficulty: "Easy", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 2", content: "Få lampa 1 att lysa rött om dess ljussensor är aktiverad och få lampa 2 att lysa blått om dess trycksensor är aktiverad", difficulty: "Easy",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 3", content: "fill in content for 3", difficulty: "Easy",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 4", content: "fill in content for 4", difficulty: "Easy",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 5", content: "fill in content for 5", difficulty: "Medium",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 6", content: "fill in content for 6", difficulty: "Medium",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 7", content: "fill in content for 7", difficulty: "Medium",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 8", content: "fill in content for 8", difficulty: "Medium",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 9", content: "fill in content for 9", difficulty: "Hard",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 10", content: "fill in content for 10", difficulty: "Hard",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 11", content: "fill in content for 11", difficulty: "Hard",createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 12", content: "fill in content for 12", difficulty: "Hard",createdAt: new Date()} );
}


Meteor.startup(() => {

  var amountOfParks = Parks.find().count();
  if(amountOfParks != 311){
    Parks.remove({});
    connectToStockholmsAPI();
  }


  var numberOfChallanges = Challenges.find({}).count();
  if(numberOfChallanges != 12){
    Challenges.remove({});
    insertChallenges();
  }



});
