import './challengesDisplayPage.html';
import '../components/modal.js';
import '../components/navbar.js';

import { Challenges } from '../../api/collections/challenges.js';

Template.challengesDisplayPage.helpers({
  challengehelper() {
    return Challenges.find({});
  },

});


Template.challengesDisplayPage.events({
  'click #modal1': function(e) {
      e.preventDefault();

      $('#modal1').modal('show');
      // BlazeLayout.render('#modal');
    }
});
