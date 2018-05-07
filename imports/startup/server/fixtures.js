import { Mongo } from 'meteor/mongo';


import '../../api/collections/lightPosts.js';
import { Challenges } from '../../api/collections/challenges.js';

Meteor.startup(() => {
  Challenges.remove({});
  Challenges.insert({ text: "Utmaning 1", content: "Tänd 3 lampor grönt", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 2", content: "Tänd 2 lampor grönt", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 3", content: "Tänd 1 lampor grönt", createdAt: new Date()} );
  Challenges.insert({ text: "Utmaning 4", content: "Tänd tre lampor blåa", createdAt: new Date()} );

});
