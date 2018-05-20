import './challengeModal.html';
import '../challenge.js';

function arrayOfValuesForChallanges() {

  return Session.get('values');
}

function getSelectedChallange() {

  return Session.get('selectedChallenge');
}


Template.challengeModal.helpers({

  buttonColourHelper(){
    if(Session.get('selectedChallenge') == undefined){
       $('.unselectedChallenge').css({
         "background-color": "grey",
       });
     }
     else{
          if(Session.get('selectedChallenge')[1] == arrayOfValuesForChallanges()[1]){
            $('.unselectedChallenge').css({
              "background-color": "green",
              });
            }
            else {
                $('.unselectedChallenge').css({
                  "background-color": "grey",
                });
              }
    }
  },

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
        // this works
          if(Session.get('selectedChallenge') != undefined){

              if(Session.get('selectedChallenge')[1] == arrayOfValuesForChallanges()[1]){

                  $('.unselectedChallenge').css({
                    "background-color": "grey",
                  });

                  Session.set('selectedChallenge', undefined);
                }
                else{
                  $('.unselectedChallenge').css({
                 "background-color": "green",
                  });

                  Session.set('selectedChallenge', arrayOfValuesForChallanges());
                }
            }
            else {
                $('.unselectedChallenge').css({
                  "background-color": "green",
                });

                Session.set('selectedChallenge', arrayOfValuesForChallanges());
              }
   }
});

function challengeModalInit() {
    if(Session.get('selectedChallenge') == undefined){

       $('.unselectedChallenge').css({
         "background-color": "grey",
       });
     }
}

Template.challengeModal.rendered = function(){
  challengeModalInit();
};
