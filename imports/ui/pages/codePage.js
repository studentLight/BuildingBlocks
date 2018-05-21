import './codePage.html';
import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/gameButtons.js';
import '../components/board.js';
// test
import '../components/modals/selectedChallengeModal.js';
import '../components/dropdown.js';


import {pageInitialize} from '../../api/pageInit.js'

Template.codePage.events({

   //the one that is really needed
  "click .selectedCM": function(event){
     $('#sCModal').openModal();
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
