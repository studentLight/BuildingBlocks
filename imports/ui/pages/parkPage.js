import './parkPage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';

function pageInit() {



  $('#parkButton').fadeTo("slow", 0.80);

  $("#parkButton").css({
    "font-size": "120%",
    "border-bottom": "solid yellow 3px",
    "background": "linear-gradient(#4caf50, #1b5e20)",
  });

  var height = window.innerHeight;

  $("#parkPageMainBody").css({
    "background": "linear-gradient(yellow, red)",
    "height": height,
    "margin": "0",

  });

}

Template.parkPage.rendered = function(){
    pageInit();
};
