import './codePage.html';
import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/gameButtons.js';
import '../components/board.js';
import '../components/lightPostSensorForm.js';
import '../components/modals/selectedChallengeModal.js';
import '../components/dropdown.js';

import { Challenges } from '../../api/collections/challenges.js';

import {pageInitialize} from '../../api/pageInit.js'

Template.codePage.helpers({

  notUndefinded(){
    if(Session.get('selectedChallenge') != undefined){
      return true;
    } else {
      return false;
    }
  },

});

Template.codePage.events({


  "click #sumbitSensorState": function(event){
     $('#modal2').openModal();
   },
   //the one that is really needed
  "click .selectedCM": function(event){
     $('#sCModal').openModal();
   },

   "click .selectedCMNext": function(event){

     var currentSC = Challenges.findOne({text: Session.get('selectedChallenge')[1]});

     var next = Challenges.findOne({createdAt: {$gt: currentSC.createdAt}}, {sort: {createdAt: 1}, limit:1});
     var id = next._id;
     var text = next.text;
     var content = next.content;
     var sC = [id, text, content];

     Session.set('selectedChallenge', sC);
    },

    "click .selectedCMPrev": function(event){

      var currentSC = Challenges.findOne({text: Session.get('selectedChallenge')[1]});

      var next = Challenges.findOne({createdAt: {$lt: currentSC.createdAt}}, {sort: {createdAt: -1}, limit:1});
      var id = next._id;
      var text = next.text;
      var content = next.content;
      var sC = [id, text, content];

      Session.set('selectedChallenge', sC);
     },

});

function pageInit() {
  $('.dropdown').dropdown();
  // console.log("test");

  // $('#parkButton').fadeTo("slow", 0.80);

  $('#parkButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });



  $("#codeButton").css({
    "font-size": "150%",
    "border-bottom": "solid #1a237e 3px",
    // "border": "solid #0288d1 2px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
    "text-decoration": "underline",

  });


}

Template.codePage.rendered = function(){
  pageInitialize();
  pageInit();
};
