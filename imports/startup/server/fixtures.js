import { Mongo } from 'meteor/mongo';

<<<<<<< HEAD
import '../../api/collections/challenges.js';

import '../../api/collections/lightPosts.js';
import { Challenges } from '../../api/collections/challenges.js';
import { Parks } from '../../api/collections/parks.js';



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

});
>>>>>>> 46e64d0b3b40b0f8634147e908f15b3b32ce0602
