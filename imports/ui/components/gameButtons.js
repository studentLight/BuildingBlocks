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
    //document.getElementById("endButton").disabled = true;
    document.getElementById("endButton").disabled = false; //testning
    document.getElementById("ifButton").disabled = false; //testning
    //document.getElementById("ifButton").disabled = true;
    //document.getElementById("thenButton").disabled = true;
    document.getElementById("thenButton").disabled = false; //testning
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
  div.id = "aBlock";
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
  content.className ="transparent s4 black-text center-align";
  content.style.position = "absolute";
  content.style.right = "70%";
  content.style.bottom = "65%";

  var paragraph = document.createElement("P");
  paragraph.innerText = text;

  content.appendChild(paragraph); // till "content" som parent lägga på texten som child

  return content;

}
// var lampSensors = ["ljus sensorn", "ljud sensorn", "tryck sensorn"];
// var lampStatus = ["aktiverad", "inaktiverad"];
// var lampPosts = ["1", "2", "3", "4", "5", "6"];
// var lampColors = ["rött", "blått", "grönt"];
// varje värde ska ha ett ID?

//Bengt
function createDropDownDiv(blockOptions) {
  let content = document.createElement("div");
  content.id = "blockDropDown";
  content.className = "input-field col m12 l12 s12 inline";
  content.style.position = "absolute";
  content.style.right = "5%";
  content.style.bottom = "60%";

  let select = document.createElement('select');
  select.setAttribute("id", "test123"); //line för testning i inspektorn
  select.className = "dropdownSelect";
  content.appendChild(select);

  let defaultOption = addOption("");
  defaultOption.setAttribute('selected','selected');
  blockOptions.forEach(addOption);

  function addOption(textContent) {
    let option = document.createElement('option');
    select.appendChild(option);
    option.textContent = textContent;

    return option;
  }
  return content;
  //Session behövs för att spara värdena satta i dropdown /Bengt

};

  // Nästlad if-sats för internt positionering av dropdowns i if och then block
  // if = 3 dropdowns (sensor/nummer/aktiverad)
  // then = 2 dropdowns (lyktstople/nummer/färg)
  // if block == "om"  &&
  function dropdownPosition() {
    content.style.right = "5%";
    content.style.bottom = "60%";
  };

  //ej klar B
  function dropdownStyle() {
    //olika dropdown beteenden och styles på blocken
  };

  //rendrar select dropdown komponenterna
  function cPageInit() {
    $(document).ready(function() {
      $('select').material_select();
    });
}

  content.rendered = function(){
    cPageInit();
  };

  //använda grid-system
  // en div för text, en div för dropdown, en div för modal (i)
  // rad 1 "text"  dropdown  info-modal-ikon  -- om ljus/ljud/tryck  -- i en och samma div-container
  // rad 2 "text"  dropdown  info-modal-ikon  -- i lyktstople 1-6    -- i en och samma div-container
  // rad 2 "text"  dropdown  info-modal-ikon  -- är aktiverad/inaktiverad -- i en och samma div-container
  // selekt-button event-listener på knappen, behöver en variabel (array)
  // bygg dropdown-innehåll funktion från en array-content
  // returnerar ett DOM-element,

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

//i denna göra innehåll
// all text hamnar på samma plats pga samma positionering i generella metoden
function createIfBlock(){
  var ifDiv = createBuildningBlock("images/ifBlock.png");
  var textDivOne = createTextDiv("Om");
  var dropDownDivOne = createDropDownDiv(["ljus sensorn", "ljud sensorn", "tryck sensorn"]);
  //var infoDiv = createInfoDiv(); // info-modal till blocket positionerad på höger sida /B
  ifDiv.appendChild(textDivOne);
  ifDiv.appendChild(dropDownDivOne);
  //IfDiv.appendChild(infoDiv);   // info-modal till blocket positionerad på höger sida /B
  document.getElementById("placeBlock").appendChild(ifDiv);
  ifDiv.name = "if";

  return ifDiv;
}

//i denna göra innehåll
// all text hamnar på samma plats pga samma positionering i generella metoden
function createThenBlock(){
  var thenDiv = createBuildningBlock("images/thenBlock.png");
  var textDiv = createTextDiv("så ska lampan i lyktstople");
  var dropDownDiv = createDropDownDiv(["1", "2", "3", "4", "5", "6"]);
  //var infoDiv = createInfoDiv(); // info-modal till blocket positionerad på höger sida /B
  thenDiv.appendChild(textDiv);
  thenDiv.appendChild(dropDownDiv);
  //thenDiv.appendChild(infoDiv);   // info-modal till blocket positionerad på höger sida /B
  document.getElementById("placeBlock").appendChild(thenDiv);
  thenDiv.name = "then";

  //inre funktion, två-dimensionell array

  return thenDiv;
}
