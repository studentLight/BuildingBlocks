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
  
   //the one that is really needed
  "click .openContact": function(event){
     $('#modal1').openModal();
   },

});

//  function tempPageInit(){
//    //this whole thing fucked up everything
//
//  //     $('.openContact').leanModal({
//  //    // dismissible: true,
//  //    // opacity: 0.5,
//  //    // in_duration: 300,
//  //    // out_duration: 200,
//  //    // ready: function() {
//  //    //     if($(".lean-overlay").length > 1) {
//  //    //         $(".lean-overlay:not(:first)").each(function() {
//  //    //             $(this).remove();
//  //    //         });
//  //    //     }
//  //    // },
//  //    // complete: function() {
//  //    //     $(".lean-overlay").each(function() {
//  //    //         $(this).remove();
//  //    //     });
//  //    // }
//  //  });
// }
// Template.challengesDisplayPage.onRendered(function(){
//   // tempPageInit();
// });
