import '../components/gameButtons.html';

import './board.js';

//import '../../ui/pages/codePage.js';


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

  // TRIGGERS startBlockInfoModal = modal-knapp id /Bengt
  // #sBModal template class ID
  // skriva om in i blocken
  // classnanm,ttriggern har samma klassnamn
  //aref = en ikon

  "click .startBlockInfoModal": function(event){
     $('#sBModal').openModal();
     // referear till html filen
     //trigger namn samma som referens
     //knappens postionernas
     //tycker på trigger, en knapp, trigger ikonen i blocket
   },

   "click .thenBlockInfoModal": function(event){
      $('#tBModal').openModal();
    },

    "click .stopBlockInfoModal": function(event){
       $('#stBModal').openModal();
     },

   "click .ifBlockInfoModal": function(event){
      $('#iBModal').openModal();
    }
});


function deleteBlock(){
  console.log("make it burn");
  document.getElementById("placeBlock").removeChild(blocks[(blocks.length-1)]);
  blocks.pop();
  setClickable();
}

function createBuildningBlock(src){
  var div = document.createElement("div");
  div.className ="container";
  div.style.position = "relative";
  div.style.width = "100%";
  div.style.padding = "10px";
  div.style.margin = "0px";

  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.style.width = "100%";

  div.appendChild(img);
  return div;
}

function createTextDiv(text){
  var content = document.createElement("div");
  content.className ="transparent s4 black-text center-align";
  // content.className ="transparent s4 white-text bold center-align"; ändra till white text
  content.style.position = "absolute";
  content.style.right = "70%";
  content.style.bottom = "60%";

  var paragraph = document.createElement("P");
  paragraph.innerText = text;
  var newLine = document.createElement("B");

  content.appendChild(paragraph);

  return content;

}
  //Bengt
  function createInfoModal() {
     var infoModal = document.createElement("div");
     infoModal.className = "helpButton waves-effect waves-light fa fa-question-circle startBlockInfoModal";
     infoModal.style.position = "absolute";
     infoModal.style.right = "10%";            //default placering, gör dessa specifika i de enskilda block-funktionerna
     infoModal.style.bottom = "40%";
     //dessa är events i template.event
     //Dessa ska skrivas om i JS
     // <a class="helpButton waves-effect waves-light fa fa-question-circle startBlockInfoModal"></a>
     // <a class="helpButton waves-effect waves-light fa fa-question-circle thenBlockInfoModal"></a>
     // <a class="helpButton waves-effect waves-light fa fa-question-circle stopBlockInfoModal"></a>

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
  var infoDiv = createInfoModal();
  div.appendChild(infoDiv);
  /* Error = "TypeError: Argument 1 of Node.appendChild is not an object". */
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
  var bottomText = createTextDiv("är");  // fixa positionering?
  bottomText.style.right = "70%";
  bottomText.style.bottom = "30%";
  var bottomDropdown = createDropDownDiv(["aktiverad", "inaktiverad"], "ifOnOffStatus");
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "25%"
  // var infoDiv = createInfoModal();
  // infoDiv.style.right = "10%";
  // infoDiv.style.bottom = "45%";
  ifDiv.appendChild(topText);
  ifDiv.appendChild(topDropdown);
  ifDiv.appendChild(middleText);
  ifDiv.appendChild(middleDropdown);
  ifDiv.appendChild(bottomText);
  ifDiv.appendChild(bottomDropdown);
  //div.appendChild(infoDiv);             // info-modal till "bottom" positionerad på höger sida /B
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
  bottomText.style.bottom = "30%";
  var bottomDropdown = createDropDownDiv(["blått", "rött", "grönt"], "thenLampColors");
  bottomDropdown.style.right = "5%";
  bottomDropdown.style.bottom = "25%"
  thenDiv.appendChild(topText);
  thenDiv.appendChild(middleText);
  thenDiv.appendChild(middleDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "top" positionerad på höger sida /B
  thenDiv.appendChild(bottomText);
  thenDiv.appendChild(bottomDropdown);
  //IfDiv.appendChild(infoDiv);   // info-modal till "middle" positionerad på höger sida /B
  //triggern appendas här
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
  content.style.bottom = "55%";
  content.style.padding = "0px";
  content.style.margin = "0px";

  let select = document.createElement('select');
  select.setAttribute("id", "select"+i); //line för testning i inspektorn
  select.className = "dropdownSelect";
  select.style.padding = "0px";
  select.style.margin = "0px";
  content.appendChild(select);


  let defaultOption = addOption("");
  defaultOption.setAttribute('selected','selected');
  blockOptions.forEach(addOption);

  i++;

  function addOption(textContent) {
    let option = document.createElement('option');
    select.appendChild(option);
    // option.style.textContent = "white-text bold"; //försöker ändra option-text till white
    option.textContent = textContent;

    return option;
  }

  return content;

}

  /* Nästlad if-sats för internt positionering av dropdowns i if och then block
    if = 3 dropdowns (sensor/nummer/aktiverad)
    then = 2 dropdowns (lyktstople/nummer/färg)
    DENNA KAN TAS BORT !!! */
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
function blockInit(id) {
  $(document).ready(function() {
    //$('select').material_select('destroy');
    $('#select'+id).material_select();
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
