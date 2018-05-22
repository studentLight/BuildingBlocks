import './selectedChallengeModal.html';

function getSelectedChallange() {

  return Session.get('selectedChallenge');
}

Template.selectedChallengeModal.helpers({

  noNextOption(){
    if(Session.get('selectedChallenge')[1] != "Utmaning 12"){
      return true;
    } else {
      return false;
    }
  },
  noPreviousOption(){
    if(Session.get('selectedChallenge')[1] != "Utmaning 1"){
      return true;
    } else {
      return false;
    }
  },

  selectedChallengeText() {
    if(Session.get('selectedChallenge') != undefined){
      var arr = getSelectedChallange();
      return arr[1];
    }

  },

  selectedChallengeContent() {
    if(Session.get('selectedChallenge') != undefined){
      var arr = getSelectedChallange();
      return arr[2];
    }
  },


});

// Template.selectedChallengeModal.events({
//
// });
