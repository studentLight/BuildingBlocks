import './challengesDisplayPage.html';
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

   //the one that is really needed
  "click .openContact": function(event){
     $('#modal1').openModal();
   },

   "click .sBM": function(event){
      $('#sBModal').openModal();
    },

<<<<<<< HEAD
    "click .tBM": function(event){
       $('#tBModal').openModal();
     },

     "click .stBM": function(event){
        $('#stBModal').openModal();
      },

=======
    "click .iBM": function(event){
       $('#iBModal').openModal();
     },

>>>>>>> c80424058522d7c831eba61078a20a7ed5614b09
});
