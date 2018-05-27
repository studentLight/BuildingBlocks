import './challengesDisplayPage.html';
import './challengesPage.js';
import '../components/modals/challengeModal.js';
import '../components/modals/startBlockModal.js';
import '../components/modals/ifBlockModal.js';
import '../components/modals/thenBlockModal.js';
import '../components/modals/stopBlockModal.js';
import '../components/navbar.js';
import '../components/challenge.js';


import { Challenges } from '../../api/collections/challenges.js';

 function difficultySelected() {
  return Session.get('difficulty');
}

Template.challengesDisplayPage.helpers({

  challengehelper() {
    return Challenges.find({difficulty: difficultySelected()});
  },

  isEasy(){
    return "Easy" == difficultySelected();
  },

  isMedium(){
    return "Medium" == difficultySelected();
  },

  isHard(){
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
      //KOLLA HÄR!!!!! TRIGGERS sBM = modal-knapp id
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

});
