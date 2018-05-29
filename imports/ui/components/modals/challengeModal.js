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
       $('#unselectedChallenge').css({
         "background-color": "grey",
       });
       $('#unselectedChallenge').text("Välj");

     }
     else{
          if(Session.get('selectedChallenge')[1] == arrayOfValuesForChallanges()[1]){
            $('#unselectedChallenge').css({
              "background-color": "green",
              });
              $('#unselectedChallenge').text("Vald");
            }
            else {
                $('#unselectedChallenge').css({
                  "background-color": "grey",
                });
                 $('#unselectedChallenge').text("Välj");
              }
    }
  },

  challengeText() {
    if(Session.get('values') != undefined){
    var arr = arrayOfValuesForChallanges();
    return arr[1];
    }
  },

  challengeContent() {
    if(Session.get('values') != undefined){
    var arr = arrayOfValuesForChallanges();
    return arr[2];
    }
  },

});

Template.challengeModal.events({

    // "click #unselectedChallenge": function(event){
    //   $("#unselectedChallenge").click(function() {
    //       if ($(this).text() == "Välj") {
    //           $(this).text("Vald");
    //         } else {
    //             $(this).text("Välj");
    //           };
    //   });
    // },

    "click #unselectedChallenge": function(event){
        // this works
          if(Session.get('selectedChallenge') != undefined){

              if(Session.get('selectedChallenge')[1] == arrayOfValuesForChallanges()[1]){

                  $('#unselectedChallenge').css({
                    "background-color": "grey",
                  });
                   $('#unselectedChallenge').text("Välj");
                  Session.set('selectedChallenge', undefined);
                }
                else{
                  $('#unselectedChallenge').css({
                 "background-color": "green",
                  });
                  $('#unselectedChallenge').text("Vald");

                  Session.set('selectedChallenge', arrayOfValuesForChallanges());
                }
            }
            else {
                $('#unselectedChallenge').css({
                  "background-color": "green",
                });
                $('#unselectedChallenge').text("Vald");
                Session.set('selectedChallenge', arrayOfValuesForChallanges());
              }
   }
});

function challengeModalInit() {
    if(Session.get('selectedChallenge') == undefined){

       $('#unselectedChallenge').css({
         "background-color": "grey",
       });
        $('#unselectedChallenge').text("Välj");
     }
}

Template.challengeModal.rendered = function(){
  challengeModalInit();
};
