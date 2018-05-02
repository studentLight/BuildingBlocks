import './challengesDisplayPage.html';

import '../components/navbar.js';

import { Challenges } from '../../api/collections/challenges.js';

Template.challengesDisplayPage.helpers({
  challengehelper() {
    return Challenges.find({});
  },
});

Template.challengesDisplayPage.events({

})
