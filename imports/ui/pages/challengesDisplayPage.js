import './challengesDisplayPage.html';
import '../components/modals/contactModal.js';
import '../components/navbar.js';

import { Challenges } from '../../api/collections/challenges.js';

Template.challengesDisplayPage.helpers({
  challengehelper() {
    return Challenges.find({});
  },

});


Template.challengesDisplayPage.events({
  "click .openContact": function(event){
    // $('#contact').leanModal();
    // $("#contact").modal("open");
    // $("#contact").showModal();
     $('#contact').openModal();
  },
});
 function tempPageInit(){
   // $('.modal').modal();
     $('.openContact').leanModal();
 }
Template.challengesDisplayPage.onRendered(function(){
  tempPageInit();
});
