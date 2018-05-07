import './challengesDisplayPage.html';
import '../components/modals/contactModal.js';
import '../components/navbar.js';
import '../components/challenge.js';

import { Challenges } from '../../api/collections/challenges.js';

Template.challengesDisplayPage.helpers({

  challengehelper() {
    return Challenges.find({});
  },

});


Template.challengesDisplayPage.events({
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
