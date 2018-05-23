import './challengesDisplayPage.html';
import '../components/modals/challengeModal.js';
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

});
