import './parkPage.html';

import '../components/header.js';
import '../components/codeViewSelector.js';

import {pageInitialize} from '../../api/pageInit.js';

//import { LightPosts } from '../../api/collections/lightPosts.js';

//import { withTracker } from 'meteor/react-meteor-data';

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



/*
  LightPosts.insert({title: '1', posX:10, posY:10, light:1, touch:0, sound:0, red:1, green:0, blue:0});
  LightPosts.insert({title: '2', posX:30, posY:30, light:1, touch:0, sound:0, red:1, green:0, blue:0});
  LightPosts.insert({title: '3', posX:50, posY:50, light:1, touch:0, sound:0, red:1, green:0, blue:0});
  LightPosts.insert({title: '4', posX:70, posY:70, light:1, touch:0, sound:0, red:1, green:0, blue:0});


  console.log("hej");

  console.log(LightPosts.find({}));

*/


}

Template.parkPage.rendered = function(){
  pageInitialize();
  parkInit();
};


/*
Template.parkPage.helpers({
  parkPagehelper() {
    return LightPosts.find({});
  },
});
*/
