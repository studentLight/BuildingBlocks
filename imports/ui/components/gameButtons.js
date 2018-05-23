import '../components/gameButtons.html';

import './board.js';

import {runCode} from '../../api/blockEvaluator/evaluator.js';

var blocks = [];
var i = 0;

Template.gameButtons.rendered = function(){
    recreateBlocks();
    setClickable();
  }


Template.gameButtons.events({

  "click #startButton": function(event){
      var div = createStartBlock();
      addBlockToCurrent(div);
      setClickable();

      runCode(blocks);

  },

  "click #endButton": function(event){
    var div = createEndBlock();
      addBlockToCurrent(div);
      setClickable();
  },

  "click #ifButton": function(event){
      var div = createIfBlock();
      addBlockToCurrent(div);
      setClickable();
      blockInit();
  },

  "click #thenButton": function(event){
      var div = createThenBlock();
      addBlockToCurrent(div);
      setClickable();
      blockInit();
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
  content.className ="transparent s4 black-text center-align";
  content.style.position = "absolute";
  content.style.right = "70%";
  content.style.bottom = "65%";

  var paragraph = document.createElement("P");
  paragraph.innerText = text;
  var newLine = document.createElement("B");

  content.appendChild(paragraph);

  return content;


}


function addBlockToCurrent(block){
    blocks.push(block);
    return;
}


function recreateBlocks(){
  for(var i = 0; i < blocks.length; i++){
      document.getElementById("placeBlock").appendChild(blocks[i]);
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
  var ifDiv = createBuildningBlock("images/ifBlock.png");
  var topText = createTextDiv("Om");
  var topDropdown = createDropDownDiv(["ljus sensorn", "ljud sensorn", "tryck sensorn"], "ifSensorValues");
  var middleText = createTextDiv("i lyktstople");
  middleText.style.right = "70%";
  middleText.style.bottom = "45%";
  var middleDropdown = createDropDownDiv(["1", "2", "3", "4", "5", "6"], "ifLampNumbers");
  middleDropdown.style.right = "5%";
  middleDropdown.style.bottom = "40%";
  var bottomText = createTextDiv("är");
  bottomText.style.right = "70%";
  bottomText.style.bottom = "25%";
  var bottomDropdown = createDropDownDiv(["aktiverad", "inaktiverad"], "ifOnOffStatus");
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "20%"
  ifDiv.appendChild(topText);
  ifDiv.appendChild(topDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "top" positionerad på höger sida /B
  ifDiv.appendChild(middleText);
  ifDiv.appendChild(middleDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "middle" positionerad på höger sida /B
  ifDiv.appendChild(bottomText);
  ifDiv.appendChild(bottomDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "bottom" positionerad på höger sida /B
  document.getElementById("placeBlock").appendChild(ifDiv);
  ifDiv.name = "if";

  return ifDiv;
}

//i denna göra innehåll
// all text hamnar på samma plats pga samma positionering i generella metoden
// satt alla delar separat som tillfällig lösning (fult men funkar) /Bengt
function createThenBlock(){
  var thenDiv = createBuildningBlock("images/thenBlock.png");
  var topText = createTextDiv("så ska lampan");
  var middleText = createTextDiv("i lyktstople");
  middleText.style.right = "70%";
  middleText.style.bottom = "45%";
  var middleDropdown = createDropDownDiv(["1", "2", "3", "4", "5", "6"], "thenLampNumbers");
  middleDropdown.style.right = "5%";
  middleDropdown.style.bottom = "40%"
  var bottomText = createTextDiv("lysa");
  bottomText.style.right = "70%";
  bottomText.style.bottom = "25%";
  var bottomDropdown = createDropDownDiv(["blått", "rött", "grönt"], "thenLampColors");
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "20%"
  thenDiv.appendChild(topText);
  thenDiv.appendChild(middleText);
  thenDiv.appendChild(middleDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "top" positionerad på höger sida /B
  thenDiv.appendChild(bottomText);
  thenDiv.appendChild(bottomDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "middle" positionerad på höger sida /B
  document.getElementById("placeBlock").appendChild(thenDiv);
  thenDiv.name = "then";

  return thenDiv;
}


//Bengt
//funktion som generera en generell variant av 3 olika dropdowns i ett block
function createDropDownDiv(blockOptions, name) {
  let content = document.createElement("div");
  content.id = name;
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

}

  /* Nästlad if-sats för internt positionering av dropdowns i if och then block
    if = 3 dropdowns (sensor/nummer/aktiverad)
    then = 2 dropdowns (lyktstople/nummer/färg) */
function dropdownPosition(position) {
  let dropDownSelect = createDropDownDiv(blockOptions);
  let postion =
  //överst
  content.style.right = "5%";
  content.style.bottom = "60%";
  //mellerst
  content.style.right = "5%";
  content.style.bottom = "40%";
  //underst
  content.style.right = "5%";
  content.style.bottom = "20%";

  return position;
}

function dropdownStyle() {
  //olika dropdown beteenden och styles på blocken
  //för tillfället löst via en generell ".dropdownSelect" i main.css
}

  //initierar select dropdown komponenterna
function blockInit() {
  $(document).ready(function() {
    $('select').material_select();
  });
}

  //initierar select dropdown komponenterna

  content.rendered = function(){
    blockInit();
  };
  

  //använda grid-system
  // en div för text, en div för dropdown, en div för modal (i)
  // rad 1 "text"  dropdown  info-modal-ikon  -- om ljus/ljud/tryck  -- i en och samma div-container
  // rad 2 "text"  dropdown  info-modal-ikon  -- i lyktstople 1-6    -- i en och samma div-container
  // rad 2 "text"  dropdown  info-modal-ikon  -- är aktiverad/inaktiverad -- i en och samma div-container
  // selekt-button event-listener på knappen, behöver en variabel (array)
  // bygg dropdown-innehåll funktion från en array-content
  // returnerar ett DOM-element,



// all innehåll hamnar på samma plats pga samma positionering i generella metoden
// satt alla delar separat som tillfällig lösning (fult men funkar) /Bengt



function setClickable(){
  if(blocks.length == 0){
    setButtonFalse(document.getElementById("startButton"));
    setButtonTrue(document.getElementById("endButton"));
    setButtonTrue(document.getElementById("ifButton"));
    setButtonTrue(document.getElementById("thenButton"));
    return;
  }
  var lastBlock = blocks[blocks.length-1];
  if(lastBlock.name == "start"){
    setButtonTrue(document.getElementById("startButton"));
    setButtonTrue(document.getElementById("endButton"));
    setButtonFalse(document.getElementById("ifButton"));
    setButtonTrue(document.getElementById("thenButton"));
  }else if(lastBlock.name == "end"){
    setButtonFalse(document.getElementById("startButton"));
    setButtonTrue(document.getElementById("endButton"));
    setButtonTrue(document.getElementById("ifButton"));
    setButtonTrue(document.getElementById("thenButton"));
  }else if(lastBlock.name == "then"){
    setButtonTrue(document.getElementById("startButton"));
    setButtonFalse(document.getElementById("endButton"));
    setButtonTrue(document.getElementById("ifButton"));
    setButtonTrue(document.getElementById("thenButton"));
  }else if(lastBlock.name == "if"){
    setButtonTrue(document.getElementById("startButton"));
    setButtonTrue(document.getElementById("endButton"));
    setButtonTrue(document.getElementById("ifButton"));
    setButtonFalse(document.getElementById("thenButton"));
  }
}
function setButtonTrue(button){
  button.disabled = true;
  button.style.opacity = 0.5;
}
function setButtonFalse(button){
  button.disabled = false;
  button.style.opacity = 1.0;
}
