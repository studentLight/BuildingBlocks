import './codePage.html';
import '../components/blocks/startBlock.js';
import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/gameButtons.js';
import '../components/board.js';
import '../components/dropdown.js';

import {pageInitialize} from '../../api/pageInit.js'

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
