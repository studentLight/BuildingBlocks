import '../components/gameButtons.html';

import './board.js';

//var blocks = [];
var i = 0;

//Session.set('allBlocks', blocks );

//var coords = Session.get('allBlocks');

Template.gameButtons.rendered = function(){
  if(Session.get('allBlocks') != undefined){
    recreateBlocks(Session.get('allBlocks'));
  }else{
    document.getElementById("startButton").disabled = false;
    document.getElementById("endButton").disabled = true;
    document.getElementById("ifButton").disabled = true;
    document.getElementById("thenButton").disabled = true;
    }
};

Template.gameButtons.events({

  "click #startButton": function(event){
      var div = createStartBlock();
      addBlockToSession(div);

  },

  "click #endButton": function(event){
    var div = createEndBlock();
      addBlockToSession(div);

  },

  "click #ifButton": function(event){
      var div = createIfBlock();
      addBlockToSession(div);

  },

  "click #thenButton": function(event){
      var div = createThenBlock();
      addBlockToSession(div);

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

function addBlockToSession(block){
  if(Session.get('allBlocks') == undefined){
    var blocks = [block];
    Session.set('allBlocks', blocks);
    return;
  }else{
    var blocks = Session.get('allBlocks');
    blocks.push(block);
    Session.set('allBlocks', blocks);
    return;
  }
}

function recreateBlocks(blockArray){
  for(var i = 0; i < blockArray.length; i++){
    if(blockArray[i].name == "start"){
      createStartBlock();
    }else if (blockArray[i].name == "end") {
      createEndBlock();
    }else if (blockArray[i].name == "if") {
      createIfBlock();
    }else if (blockArray[i].name == "then") {
      createThenBlock();
    }
  }
}

function createStartBlock(){
  var div = createBuildningBlock("images/startBlock.png");
  var textDiv = createTextDiv("start-block");
  div.appendChild(textDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "start";

  return div;
}

function createEndBlock(){
  var div = createBuildningBlock("images/endBlock.png");
  var textDiv = createTextDiv("end-block");
  div.appendChild(textDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "end";

  return div;
}

function createIfBlock(){
  var div = createBuildningBlock("images/ifBlock.png");
  var textDiv = createTextDiv("if");
  div.appendChild(textDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "if";

  return div;
}

function createThenBlock(){
  var div = createBuildningBlock("images/thenBlock.png");
  var textDiv = createTextDiv("then");
  div.appendChild(textDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "then";

  return div;
}
