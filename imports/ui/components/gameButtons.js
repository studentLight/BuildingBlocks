import '../components/gameButtons.html';

import './board.js';

var blocks;
var i = 0;

Template.gameButtons.events({

  "click #startButton": function(event){
      console.log("in startButton klick");
      var div = createBuildningBlock("images/startBlock.png");
      var textDiv = createTextDiv("start-block");
      div.appendChild(textDiv);
      document.getElementById("placeBlock").appendChild(div);
  },

  "click #endButton": function(event){
      console.log("in endButton klick");
      var div = createBuildningBlock("images/endBlock.png");
      var textDiv = createTextDiv("Stopp-block");
      div.appendChild(textDiv);
      document.getElementById("placeBlock").appendChild(div);
  },

  "click #ifButton": function(event){
      console.log("in ifButton klick");
      var div = createBuildningBlock("images/ifBlock.png");
      var textDiv = createTextDiv("Om-block");
      div.appendChild(textDiv);
      document.getElementById("placeBlock").appendChild(div);
  },
  "click #thenButton": function(event){
      console.log("in thenButton klick");
      var div = createBuildningBlock("images/thenBlock.png");
      var textDiv = createTextDiv("Så-block");
      div.appendChild(textDiv);
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
function createTextDiv(text){
  var content = document.createElement("div");
  content.style.position = "absolute";
  content.style.bottom = "40%";
  content.style.right = "40%";

  var paragraph = document.createElement("P");
  paragraph.innerText = text;


  content.appendChild(paragraph);
  return content;

}
/*function createActionDiv(text){
  var content = document.createElement("div");
  content.style.textAlign = "center";
  content.style.top = "50%";

  var paragraph = document.createElement("P");
  paragraph.innerText = text;


  content.appendChild(paragraph);
  return content;

}*/
