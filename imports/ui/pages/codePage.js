import './codePage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';

import {pageInitialize} from '../../api/pageInit.js'

function pageInit() {

  $('#parkButton').fadeTo("slow", 0.80);

  $("#codeButton").css({
    "font-size": "120%",
    "border-bottom": "solid yellow 3px",
    "background": "linear-gradient(#4caf50, #1b5e20)",
  });


}

Template.codePage.rendered = function(){
  pageInitialize();
  pageInit();
};
