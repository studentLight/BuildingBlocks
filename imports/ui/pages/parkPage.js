import './parkPage.html';

import '../components/header.js';
import '../components/codeViewSelector.js';
import '../components/parkMap.js';

import {pageInitialize} from '../../api/pageInit.js';

import { LightPosts } from '../../api/collections/lightPosts.js';


Meteor.startup(function () {
  var latAndLong = [59.338408, 18.054466];
  Session.set('parkCoordinates', latAndLong);
});

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


/*
LightPosts.insert({title: '1', lat:59.338209, long:18.053968, light:1, touch:0, sound:0, red:1, green:0, blue:0});
LightPosts.insert({title: '2', lat:59.337923, long:18.053810, light:1, touch:0, sound:0, red:1, green:0, blue:0});
LightPosts.insert({title: '3', lat:59.337876, long:18.054372, light:1, touch:0, sound:0, red:1, green:0, blue:0});
LightPosts.insert({title: '4', lat:59.337980, long:18.055028, light:1, touch:0, sound:0, red:1, green:0, blue:0});
LightPosts.insert({title: '5', lat:59.338196, long:18.055433, light:1, touch:0, sound:0, red:1, green:0, blue:0});
LightPosts.insert({title: '6', lat:59.338251, long:18.054494, light:1, touch:0, sound:0, red:1, green:0, blue:0});
*/

  //console.log(LightPosts.find({}{lat:1}));




}

Template.parkPage.rendered = function(){
  pageInitialize();
  parkInit();
};
