import './challengesDisplayPage.html';
import './challengesPage.js';
import '../components/modals/challengeModal.js';
import '../components/modals/startBlockModal.js';
import '../components/modals/ifBlockModal.js';
import '../components/modals/thenBlockModal.js';
import '../components/modals/stopBlockModal.js';
import '../components/navbar.js';
import '../components/challenge.js';
// test
import '../components/modals/selectedChallengeModal.js';

import { Challenges } from '../../api/collections/challenges.js';

 function difficultySelected() {
  return Session.get('difficulty');
}

Template.challengesDisplayPage.helpers({

  challengehelper() {
    return Challenges.find({difficulty: difficultySelected()});
  },

  isEasy(){
    // console.log("Easy ",difficultySelected());
    return "Easy" == difficultySelected();

  },

  isMedium(){
    // console.log("Medium ",difficultySelected());
    return "Medium" == difficultySelected();

  },

  isHard(){
    // console.log("Hard ",difficultySelected());
    return "Hard" == difficultySelected();

  },

});

Template.challengesDisplayPage.events({

  "click .challengeItem": function(event){
    var id = this._id;
    var text = this.text;
    var content = this.content;
    var values = [id, text, content];
    Session.set('values', values);
  },

    "click .easySelect": function(event){
        Session.set('difficulty', 'Easy');
    },

    "click .mediumSelect": function(event){
         Session.set('difficulty', 'Medium');
    },

    "click .hardSelect": function(event){
         Session.set('difficulty', 'Hard' );
    },


   //the one that is really needed
  "click .openContact": function(event){
     $('#modal1').openModal();
   },

   // Move these when gameblocks are functional
   "click .sBM": function(event){
      $('#sBModal').openModal();
    },


    "click .tBM": function(event){
       $('#tBModal').openModal();
     },

     "click .stBM": function(event){
        $('#stBModal').openModal();
      },


    "click .iBM": function(event){
       $('#iBModal').openModal();
     },
    // test
     "click .selectedCM": function(event){
        $('#sCModal').openModal();
      },



});
