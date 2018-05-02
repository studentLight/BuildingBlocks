import './parkPage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';
import {pageInitialize} from '../../api/pageInit.js';



function parkPageInit() {



  $('#codeButton').fadeTo("slow", 0.80);

  $('#codeButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });

  $("#parkButton").css({
    "font-size": "120%",
    "border-bottom": "solid #1a237e 3px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });

  var parentHeight = $('#workPlz').height();
  var pos = $("#imgDiv").position();
  var trueHeight = (parentHeight - pos.top)-10;

  $("#imgDiv").css({
    "max-height": trueHeight,
    //"height": trueHeight,
    "max-width": "100%",
    "margin": "10px",
    "overflow-x": "auto",
  });

  $("#imgHolder").css({
    "content": "url(images/tegner.JPG)",
  });


}

Template.parkPage.rendered = function(){
  pageInitialize();
  parkPageInit();
};
