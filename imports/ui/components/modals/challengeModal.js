import './challengeModal.html';
import '../challenge.js';

function arrayOfValuesForChallanges() {

  return Session.get('values');
}

Template.challengeModal.helpers({

  challengeText() {
    var arr = arrayOfValuesForChallanges();
    return arr[1];
  },

  challengeContent() {
    var arr = arrayOfValuesForChallanges();
    return arr[2];
  }


});

// Template.challengeModal.events({
//
// });
