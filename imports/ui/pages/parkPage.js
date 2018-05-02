import './parkPage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';
import {pageInitialize} from '../../api/pageInit.js'

function pageInit() {



  $('#parkButton').fadeTo("slow", 0.80);

  $("#parkButton").css({
    "font-size": "120%",
    "border-bottom": "solid yellow 3px",
    "background": "linear-gradient(#4caf50, #1b5e20)",
  });

  $("#parkPageMainBody").css({
    "background": "linear-gradient(yellow, blue)",
    "margin": "0",

  });

}

Template.parkPage.rendered = function(){
    pageInitialize();
    pageInit();
};
