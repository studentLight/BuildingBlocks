import './selectedChallengeModal.html';

function getSelectedChallange() {

  return Session.get('selectedChallenge');
}

Template.selectedChallengeModal.helpers({

  // notUndefindedCheck(){
  //   if(getSelectedChallange() != undefined){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },

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
