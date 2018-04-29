import './challengesDisplayPage.html';

import '../components/navbar.js';

// import { Challenges } from '../imports/api/challenges.js';

Template.challengesDisplayPage.helpers({
  challengehelper() {
    return Challenges.find({});
  },
});
