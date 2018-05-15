import './parkPage.html';

import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/parkMap.js';

import {pageInitialize} from '../../api/pageInit.js';

import { LightPosts } from '../../api/collections/lightPosts.js';


function parkInit() {

  $('#codeButton').fadeTo("slow", 0.80);

  $('#codeButton').css({
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });

  $("#parkButton").css({
    "font-size": "120%",
    "border-bottom": "solid #1a237e 3px",
    "background": "linear-gradient(#1976d2, #0d47a1)",
  });


}

Template.parkPage.rendered = function(){
  pageInitialize();
  parkInit();
};
