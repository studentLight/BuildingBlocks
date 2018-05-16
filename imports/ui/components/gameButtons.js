import '../components/gameButtons.html';

import './board.js';

var blocks;
var i = 0;

Template.gameButtons.events({

  "click #startButton": function(event){
      console.log("in startButton klick");
      var div = createBuildningBlock("images/StartBlock.png");
      document.getElementById("placeBlock").appendChild(div);
  },

  "click #endButton": function(event){
      console.log("in endButton klick");
      var div = createBuildningBlock("images/SlutBlock.png");
      document.getElementById("placeBlock").appendChild(div);
  },

  "click #ifButton": function(event){
      console.log("in endButton klick");
      var div = createBuildningBlock("images/OmBlock.png");
      document.getElementById("placeBlock").appendChild(div);
  },
  "click #thenButton": function(event){
      console.log("in endButton klick");
      var div = createBuildningBlock("images/SåBlock.png");
      document.getElementById("placeBlock").appendChild(div);
  }

});

function createBuildningBlock(src){
  var div = document.createElement("div");
  div.className ="container";
  div.style.position = "relative";
  div.style.width = "100%";
  div.style.padding = "10px";

  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.style.width = "100%";

  div.appendChild(img);
  return div;
}
