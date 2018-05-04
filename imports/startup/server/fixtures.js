import { Mongo } from 'meteor/mongo';


import '../../api/collections/lightPosts.js';
import { Challenges } from '../../api/collections/challenges.js';

Meteor.startup(() => {
  Challenges.remove({});
  Challenges.insert({ text: "Utmaning 1", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 2", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 3", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 4", createdAt: new Date()} );

});
