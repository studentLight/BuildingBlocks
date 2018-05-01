import './codePage.html';

import '../components/navbar.js';
import '../components/codeViewSelector.js';

function pageInit() {

  $('#codeButton').animate({
    opacity: '0.5',
  });
}

Template.codePage.rendered = function(){
    pageInit();
};
