import './challengeModal.html';
import '../challenge.js';

function arrayOfValuesForChallanges() {

  return Session.get('values');
}

function getSelectedChallange() {

  return Session.get('selectedChallenge');
}

function selectionCheck() {
 if(getSelectedChallange() == arrayOfValuesForChallanges()){
   return true;
 }
 else{
   return false;
 }
}

function undefinedCheck() {
  if(getSelectedChallange() == undefined){
    return true;
  }
  else{
    return false;
  }
}


Template.challengeModal.helpers({

  challengeText() {
    var arr = arrayOfValuesForChallanges();
    return arr[1];
  },

  challengeContent() {
    var arr = arrayOfValuesForChallanges();
    return arr[2];
  }


});

Template.challengeModal.events({

    "click .unselectedChallenge": function(event){

        // $(event.currentTarget).toggleClass('done alarm_on');

        // this works

        if(Session.get("isSelected") == false){

          if(Session.get('selectedChallenge') == arrayOfValuesForChallanges()){
            $('.unselectedChallenge').css({
              "background-color": "grey",
            });
            console.log("grey");

            Session.set('selectedChallenge', undefined);
            Session.set("isSelected", false);

          } else {
            $('.unselectedChallenge').css({
              "background-color": "green",
            });
            console.log("green");

            Session.set('selectedChallenge', arrayOfValuesForChallanges());
            Session.set('isSelected', true);
          }

        }
        else {
          $('.unselectedChallenge').css({
            "background-color": "grey",
          });
          console.log("grey");
          Session.set('selectedChallenge', undefined);
          Session.set("isSelected", false);
        }
   }
});

// function challengeModalInit() {
//     if(Session.get('selectedChallenge') == undefined){
//        Session.set("isSelected", false);
//
//        $('.unselectedChallenge').css({
//          "background-color": "grey",
//        });
//        console.log("grey");
//      }
//      else{
//       if(Session.get('selectedChallenge') == arrayOfValuesForChallanges()){
//         $('.unselectedChallenge').css({
//           "background-color": "green",
//         });
//         console.log("green");
//          Session.set("isSelected", true);
//       }
//        else {
//         $('.unselectedChallenge').css({
//           "background-color": "grey",
//         });
//         console.log("grey");
//          Session.set("isSelected", false);
//       }
//     }
// }
//
// Template.challengeModal.rendered = function(){
//   challengeModalInit();
// };
//
// Template.challengeModal.onCreated(function(){
//   challengeModalInit();
// });
