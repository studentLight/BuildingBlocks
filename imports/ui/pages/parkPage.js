import './parkPage.html';

import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/parkMap.js';

import {pageInitialize} from '../../api/pageInit.js';

import { LightPosts } from '../../api/collections/lightPosts.js';


function parkInit() {

  // console.log("testar");

  // $('#codeButton').fadeTo("slow", 0.80);

  $('#codeButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
    "font-size": "150%",
  });

  $("#parkButton").css({
    "font-size": "150%",
    // "border": "solid #0288d1 2px",
    // "border-bottom": "solid #1a237e 3px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
    "text-decoration": "underline",
  });


}

Template.parkPage.rendered = function(){
  pageInitialize();
  parkInit();
};
