import '../components/gameButtons.html';
import '../components/board.html';
import './board.js';
import '../components/modals/selectedChallengeModal.js';
import '../components/modals/startBlockModal.js';
import '../components/modals/ifBlockModal.js';
import '../components/modals/thenBlockModal.js';
import '../components/modals/stopBlockModal.js';
import '../../ui/pages/codePage.js';

import {runCode} from '../../api/blockEvaluator/evaluator.js';

var blocks = [];
var i = 0;

Template.gameButtons.rendered = function(){
    recreateBlocks();
    setClickable();
    document.getElementById("runButton").addEventListener("click", function(){
      if(Session.get('itIsDayTime')){
        runCode(blocks)
      }else{
        alert("Det är inte tillåtet att koda på kvällen");
      }

     });
    document.getElementById("backButton").addEventListener("click", function(){
       deleteBlock()
     });
  }


Template.gameButtons.events({

  "click #startButton": function(event){
      var div = createStartBlock();
      addBlockToCurrent(div);
      setClickable();

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
      blockInit(i-3);
      blockInit(i-2);
      blockInit(i-1);
      // till blockinit lägga till "Prevent default browser form submit"?
      //event.preventDefault();
  },

  "click #thenButton": function(event){
      var div = createThenBlock();
      addBlockToCurrent(div);
      setClickable();
      blockInit(i-2);
      blockInit(i-1);
  },

});


function deleteBlock(){
  console.log("make it burn");
  document.getElementById("placeBlock").removeChild(blocks[(blocks.length-1)]);
  blocks.pop();
  setClickable();
}

//albin
// Noterar att om och avslut blocket går lite över vid borders varandra när de läggs till intill varandra.
function createBuildningBlock(src){
  var lastBlock = blocks[blocks.length-1];
  var i;
  if(blocks.length == 0){
    var div = document.createElement("div");
    div.className ="container";
    div.style.position = "relative";
    div.style.width = "100%";
    div.style.padding = "10px";
    div.style.top = "25px";
  }else if(lastBlock.name == "end"){
    var i = (blocks.length*-40)+25;
    var div = document.createElement("div");
    div.className ="container";
    div.style.position = "relative";
    div.style.width = "100%";
    div.style.padding = "10px";
    div.style.top = i+"px";
  }else if(lastBlock.name == "start"){
    var i = (blocks.length*-40)+22;
    var div = document.createElement("div");
    div.className ="container";
    div.style.position = "relative";
    div.style.width = "100%";
    div.style.padding = "10px";
    div.style.top = i+"px";
  }else if(lastBlock.name == "then"){
    var i = (blocks.length*-40)+8;
    var div = document.createElement("div");
    div.className ="container";
    div.style.position = "relative";
    div.style.width = "100%";
    div.style.padding = "10px";
    div.style.top = i+"px";
  }else{
      var div = document.createElement("div");
      div.className ="container";
      div.style.position = "relative";
      div.style.width = "100%";
      div.style.padding = "10px";
      var i = (blocks.length*-40)+15;
      div.style.top = i+"px";
}

  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.style.width = "100%";

  div.appendChild(img);
  return div;
}


function createTextDiv(text){
  var content = document.createElement("div");
  content.setAttribute('class', 'blockText');   //bloxText ligger i main.css
  content.style.position = "absolute";
  var paragraph = document.createElement("P");
  paragraph.innerText = text;
  //var newLine = document.createElement("B");
  content.appendChild(paragraph);

  return content;

}
  //Bengt
  //appendar ikonen till boarden, ej i gamebuttons, saker sker på olika ställen
  function createInfoModal() {
     let modalDiv = document.createElement("div");
     infoModal = document.createElement('a');
     //console.log(infoModal);                      //line för testning i inspektorn
     //infoModal.setAttribute("id", "test123");     //line för testning i inspektorn
     infoModal.style.position = "absolute";
     modalDiv.appendChild(infoModal);

     return modalDiv;
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
  var textDiv = createTextDiv("INLEDNING");
  textDiv.style.right = "37%";
  textDiv.style.bottom = "35%";
  var infoDiv = createInfoModal();
  infoModal.setAttribute('class', 'helpButton waves-effect waves-light fa fa-question-circle startBlockInfoModal');  // specifik för startBlocket
  // infoDiv.setAttribute('id', 'tes456');   //test kod-rad
  // console.log(infoDiv);                   //test kod-rad
  infoModal.style.right = "9%";
  infoModal.style.bottom = "23%";
  div.appendChild(infoDiv);
  div.appendChild(textDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "start";

  return div;
}


function createEndBlock(){
  var div = createBuildningBlock("images/endBlock.png");
  var textDiv = createTextDiv("AVSLUT");
  textDiv.style.right = "42%";
  textDiv.style.bottom = "35%";
  var infoDiv = createInfoModal();
  infoModal.setAttribute('class', 'helpButton waves-effect waves-light fa fa-question-circle stopBlockInfoModal');    // specifik för stoppBlocket
  infoModal.style.right = "9%";
  infoModal.style.bottom = "18%";
  div.appendChild(textDiv);
  div.appendChild(infoDiv);
  document.getElementById("placeBlock").appendChild(div);
  div.name = "end";


  return div;
}

// fixa resten av textens positionering!
function createIfBlock(){
  var ifDiv = createBuildningBlock("images/ifBlock.png");
  var topText = createTextDiv("Om");
  topText.style.right = "70%";
  topText.style.bottom = "60.8%";
  var topDropdown = createDropDownDiv(["ljussensorn", "ljudsensorn", "trycksensorn"], "ifSensorValues");
  topDropdown.setAttribute('class', 'sensorSelect');
  topDropdown.style.right = "1%";
  topDropdown.style.bottom = "55%";
  var middleText = createTextDiv("i lyktstople");  // fixa positionering!
  middleText.style.right = "45%";
  middleText.style.bottom = "41%";
  var middleDropdown = createDropDownDiv(["1", "2", "3", "4", "5", "6"], "ifLampNumbers");
  middleDropdown.setAttribute('class', 'lampSelect');
  middleDropdown.style.right = "5%";
  middleDropdown.style.bottom = "35%";
  var bottomText = createTextDiv("är");
  bottomText.style.right = "65%";
  bottomText.style.bottom = "21%";
  var bottomDropdown = createDropDownDiv(["aktiverad", "inaktiverad"], "ifOnOffStatus");
  bottomDropdown.setAttribute('class', 'onOfOffSelect');
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "15%";
  var ifInfoDiv = createInfoModal();
  infoModal.setAttribute('class', 'helpButton waves-effect waves-light fa fa-question-circle ifBlockInfoModal');   // specifik för ifBlocket
  infoModal.style.right = "9%";
  infoModal.style.bottom = "13%";
  ifDiv.appendChild(topText);
  ifDiv.appendChild(topDropdown);
  ifDiv.appendChild(middleText);
  ifDiv.appendChild(middleDropdown);
  ifDiv.appendChild(bottomText);
  ifDiv.appendChild(bottomDropdown);
  ifDiv.appendChild(ifInfoDiv);
  //div.appendChild(infoDiv);             // info-modal till "bottom" positionerad på höger sida /B
  document.getElementById("placeBlock").appendChild(ifDiv);
  ifDiv.name = "if";

  return ifDiv;
}

// fixa positionering!
// all text hamnar på samma plats pga samma positionering i generella metoden
// sätter alla delar separat i varje block som en lösning (fult men funkar) /Bengt
function createThenBlock(){
  var thenDiv = createBuildningBlock("images/thenBlock.png");
  var topText = createTextDiv("så ska lampan");  // fixa positionering!
  topText.style.right = "30%";
  topText.style.bottom = "60%";
  var middleText = createTextDiv("i lyktstople");
  middleText.style.right = "45%";
  middleText.style.bottom = "41.5%";
  var middleDropdown = createDropDownDiv(["1", "2", "3", "4", "5", "6"], "thenLampNumbers");
  middleDropdown.setAttribute('class', 'lampSelect');
  middleDropdown.style.right = "5%";
  middleDropdown.style.bottom = "35%";
  var bottomText = createTextDiv("lysa");
  bottomText.style.right = "65%";
  bottomText.style.bottom = "21.5%";
  var bottomDropdown = createDropDownDiv(["blått", "rött", "grönt"], "thenLampColors");
  bottomDropdown.setAttribute('class', 'lightColorSelect');
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "15%";
  var infoDiv = createInfoModal();
  infoModal.setAttribute('class', 'helpButton waves-effect waves-light fa fa-question-circle thenBlockInfoModal');   // specifik för thenBlocket
  infoModal.style.right = "9%";
  infoModal.style.bottom = "15%";
  thenDiv.appendChild(topText);
  thenDiv.appendChild(middleText);
  thenDiv.appendChild(middleDropdown);
  thenDiv.appendChild(bottomText);
  thenDiv.appendChild(bottomDropdown);
  thenDiv.appendChild(infoDiv);
  document.getElementById("placeBlock").appendChild(thenDiv);
  thenDiv.name = "then";

  return thenDiv;
}


//Bengt
//funktion som generera en generell variant av 3 olika dropdowns i ett block
function createDropDownDiv(blockOptions, name) {
  let content = document.createElement("div");
  content.setAttribute('class', 'input-field col m12 l12 s12 inline');     //alterntiv kod
  content.setAttribute('id', name);
  // content.id = name;
  // content.className = "input-field col m12 l12 s12 inline";
  content.style.position = "absolute";
  content.style.padding = "0px";
  content.style.margin = "0px";

  let select = document.createElement('select');
  select.setAttribute("id", "select" +i); //line för testning i inspektorn
  select.className = "dropdownSelect";    //standard dropdown beteende
  select.style.padding = "0px";
  select.style.margin = "0px";
  content.appendChild(select);


  let defaultOption = addOption("<välj>");
  defaultOption.setAttribute('selected','selected');
  blockOptions.forEach(addOption);

  i++;

  function addOption(textContent) {
    let option = document.createElement('option');
    option.setAttribute('class','selectText');      //försöker ändra option-text till white
    // console.log(option);
    select.appendChild(option);
    option.textContent = textContent;

    return option;
  }

  return content;

}

function dropdownStyle() {
  //olika dropdown beteenden och styles på blocken
  //för tillfället löst via en generell ".dropdownSelect" i main.css
}

  //initierar select dropdown komponenterna
function blockInit(id) {
  $(document).ready(function() {
    //$('select').material_select('destroy');
    $('#select'+id).material_select();
  });
}
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
