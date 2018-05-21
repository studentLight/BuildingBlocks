import './selectedChallengeModal.html';

function getSelectedChallange() {

  return Session.get('selectedChallenge');
}

Template.selectedChallengeModal.helpers({

  selectedChallengeText() {
    var arr = getSelectedChallange();
    return arr[1];
  },

  selectedChallengeContent() {
    var arr = getSelectedChallange();
    return arr[2];
  },


});
