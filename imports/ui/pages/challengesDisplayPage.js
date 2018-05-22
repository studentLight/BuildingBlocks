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

   // "click .dD": function(event){
   //    $('.dropdown-button').dropdown({
   //        inDuration: 300,
   //        outDuration: 225,
   //        constrain_width: false, // Does not change width of dropdown to that of the activator
   //        hover: true, // Activate on hover
   //        gutter: 0, // Spacing from edge
   //        belowOrigin: false, // Displays dropdown below the button
   //        alignment: 'left' // Displays dropdown with edge aligned to the left of button
   //    });
   //  },


});



  function cPageInit() {
    $(document).ready(function() {
      $('select').material_select();
    });

    $(document).ready(function() {
      $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });
    });


  }

  Template.challengesDisplayPage.rendered = function(){
    // pageInitialize();
    cPageInit();
  };
