import './codePage.html';

import '../components/header.js';
import '../components/codeViewSelector.js';

import {pageInitialize} from '../../api/pageInit.js'

function pageInit() {

  console.log("test");

  $('#parkButton').fadeTo("slow", 0.80);

  $('#parkButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });



  $("#codeButton").css({
    "font-size": "120%",
    "border-bottom": "solid #1a237e 3px",

    "background": "linear-gradient(#1976d2, #0d47a1)",
  });


}

Template.codePage.rendered = function(){
  pageInitialize();
  pageInit();
};
