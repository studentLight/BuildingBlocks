import './challengeModal.html';
import '../challenge.js';

function arrayOfValuesForChallanges() {

  return Session.get('values');
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
        console.log("click");
        // $(event.currentTarget).toggleClass('done alarm_on');

        // this works
        if(Session.get("isSelected") == false){

          $('.unselectedChallenge').css({
            "background-color": "green",
          });

          Session.set('isSelected', true);
        }
        else {
          $('.unselectedChallenge').css({
            "background-color": "grey",
          });

          Session.set("isSelected", false);
        }
   }
});

function challengeModalInit() {
   Session.set("isSelected", false);
}
Template.challengeModal.rendered = function(){
  challengeModalInit();
  

};
