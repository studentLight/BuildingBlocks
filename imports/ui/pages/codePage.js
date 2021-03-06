import './codePage.html';
import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/gameButtons.js';
import '../components/board.js';
import '../components/lightPostSensorForm.js';
import '../components/modals/selectedChallengeModal.js';
import '../components/dropdown.js';
import '../components/modals/alertNightTime.js';
import { getColor } from '../../api/collections/lightPosts.js';
import { Challenges } from '../../api/collections/challenges.js';
import {resetSensors} from '../../api/collections/lightPosts.js';
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

  /* Event som sker av TRIGGERS hos t.ex: startBlockInfoModal = modal-knapp id /Bengt
     tycker på trigger, en knapp, trigger ikonen i blocket
     #sBModal template class ID */
  "click #resetSensors": function(event){
       resetSensors();
  },

  "click #runButton": function(event){
    if(!Session.get("itIsDayTime")){
      $('#nightTimeModal').openModal();
    }
  },

  "click .startBlockInfoModal": function(event){
      $('#sBModal').openModal();
   },

   "click .thenBlockInfoModal": function(event){
      $('#tBModal').openModal();
    },

    "click .stopBlockInfoModal": function(event){
       $('#stBModal').openModal();
     },

   "click .ifBlockInfoModal": function(event){
      $('#iBModal').openModal();
    },

  "click #sumbitSensorState": function(event){
    var rgb = getColor(2);

    $('#modal2').openModal();
   },

   //the one that is really needed
  "click .selectedCM": function(event){
     $('#sCModal').openModal();
   },
   // select test-button, ska removas i final test-version
   "click .selectedCMNext": function(event){

     var currentSC = Challenges.findOne({text: Session.get('selectedChallenge')[1]});
     var next = Challenges.findOne({createdAt: {$gt: currentSC.createdAt}}, {sort: {createdAt: 1}, limit:1});
     var id = next._id;
     var text = next.text;
     var content = next.content;
     var sC = [id, text, content];

     Session.set('selectedChallenge', sC);
    },

    // select test-button, ska removas i final test-version
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

  // $('#parkButton').fadeTo("slow", 0.80);

  $('#parkButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
    "font-size": "150%",
  });

  $("#codeButton").css({
    "font-size": "150%",
    // "border-bottom": "solid #1a237e 3px",
    // "border": "solid #0288d1 2px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
    "text-decoration": "underline",

  });


}

Template.codePage.rendered = function(){
  pageInitialize();
  pageInit();
};
