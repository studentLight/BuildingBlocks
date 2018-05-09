import { Mongo } from 'meteor/mongo';


import '../../api/collections/challenges.js';

import '../../api/collections/lightPosts.js';
import { Challenges } from '../../api/collections/challenges.js';
import { Parks } from '../../api/collections/parks.js';
import { LightPosts } from '../../api/collections/lightPosts.js';



Meteor.startup(() => {
  Challenges.remove({});


  console.log(Parks.find().fetch());

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

  //lat:59.338209, long:18.053968, light:0, touch:0, sound:0, red:0, green:0, blue:0
  var lmp1 = [59.338209, 18.053968, 0, 0, 0, 0, 0, 0];
  var lmp2 = [59.337923, 18.053810, 0, 0, 0, 0, 0, 0];
  var lmp3 = [59.337876, 18.054372, 0, 0, 0, 0, 0, 0];
  var lmp4 = [59.337980, 18.055028, 0, 0, 0, 0, 0, 0];
  var lmp5 = [59.338196, 18.055433, 0, 0, 0, 0, 0, 0];
  var lmp6 = [59.338251, 18.054494, 0, 0, 0, 0, 0, 0];
  var lmp = [lmp1,lmp2,lmp3,lmp4,lmp5,lmp6];

  LightPosts.remove({});

  LightPosts.insert(
    { parkName:"Tegnerlunden", parkLat:59.338408, parkLong:18.054466, lamps:lmp }
  );

});
