import './parkPage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';
import {pageInitialize} from '../../api/pageInit.js';



function pageInit() {



  $('#codeButton').fadeTo("slow", 0.80);

  $('#codeButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });

  $("#parkButton").css({
    "font-size": "120%",
    "border-bottom": "solid #1a237e 3px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });

  var x = document.getElementById("workPlz").parentNode.parentElement.height;

  $("#imgDiv").css({
    "max-height": "20px",
    "max-width": "100%",
    "margin": "10px",
  });


}

Template.parkPage.rendered = function(){
  pageInitialize();
  pageInit();
};
