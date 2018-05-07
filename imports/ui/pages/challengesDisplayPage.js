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

});

Template.challengesDisplayPage.events({

  "click .challengeItem": function(event){
    var id = this._id;
    var text = this.text;
    var content = this.content;
    var values = [id, text, content];

    Session.set('values', values);

  },

  "click .openContact": function(event){
     $('#contact').openModal();

   },

  "click .closeContact": function(event){
    $('#close').closeModal();
  },

  "click .listItem": function(event){
     $('#contact').openModal();
   },

   "click .openContact": function(event){
     $('#close').closeModal();
   },
});
// move this to global pageinit()
 function tempPageInit(){
     $('.openContact').leanModal();

 }
Template.challengesDisplayPage.onRendered(function(){
  tempPageInit();
});
