import './challengesDisplayPage.html';
// import '../components/modals/modal.js';
import '../components/navbar.js';

import { Challenges } from '../../api/collections/challenges.js';

Template.challengesDisplayPage.helpers({
  challengehelper() {
    return Challenges.find({});
  },

});


Template.challengesDisplayPage.events({
  // 'click #modal1': function(e) {
  //     e.preventDefault();
  //
  //     $('#modal1').modal('show');
  //     // BlazeLayout.render('#modal');
  //   }
  'click  #modal1': function() {
           $('#modal1').leanModal();
           // var instance = M.Modal.getInstance(elem);
           // instace.open();
        //  BlazeLayout.render('modal');
          // console.log("button was clicked");
      }
});
//
// Template.challengesDisplayPage.onRendered({
// //   $(document).ready(function() {
// //   $('#modal1').leanModal();
// // });
//
// });
function pageInit() {
 $('.modal-trigger').leanModal();
 console.log("button was clicked");
}

Template.challengesDisplayPage.rendered = function(){
    pageInit();

};
