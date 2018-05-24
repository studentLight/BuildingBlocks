import { changeColor } from '../collections/lightPosts.js';
import { LightPosts } from '../collections/lightPosts.js';
import { changeStatusForLightposts } from '../collections/lightPosts.js';

var codeSequenceIsOkey = false;
var blockStatus = [];
var lights;

export function runCode(blocks){
  blockStatus = [];
  for(var i = 0; i < blocks.length; i++){
    blockStatus.push(false);
  }
  for(var i = 0; i<1; i++){
    lights  = LightPosts.find({parkName: "Tegnerlunden"}).fetch();
    lights = lights[0].lamps;
    evaluateBlocks(blocks);
    sleep(1);
  }
  console.log("BlockStatus: ",blockStatus);
}



function evaluateBlocks(blocks){
  for(var i = 0; i < blocks.length; i++){
    if(handleBlock(blocks[i])){
      blockStatus[i]=true;
    }
  }
}

function handleBlock(block){

  if(block.name == "if"){
    if(codeSequenceIsOkey){
      if(evaluateIfBlock(block)){
        return true;
      }else{
        codeSequenceIsOkey = false;
        return false;
      }
    }else{
      return false;
    }
  }else if(block.name == "start"){
    codeSequenceIsOkey = true;
    return true;
  }else if(block.name == "end"){
    if(codeSequenceIsOkey){
      return true;
    }else{
      return false;
    }
  }else if(block.name == "then"){
    if(codeSequenceIsOkey){
      setLightpostColor(block);
      return true;
    }else{
      return false;
    }
  }
}


function evaluateIfBlock(block){

  //console.log( block.getElementsByClassName("dropdownSelect") );
  console.log($('div[id^="select"]'));

  var sensorId = block.children[2].childNodes[0].childNodes[3].attributes.id;
  var postId = block.children[4].childNodes[0].childNodes[3].attributes.id;
  var activeId = block.children[6].childNodes[0].childNodes[3].attributes.id;

  var number = document.getElementById(postId.value).value;
  var sensor = document.getElementById(sensorId.value).value;
  var active = document.getElementById(activeId.value).value;
  //changeStatusForLightposts(number, sensor, active);

  if(active == "aktiverad"){
    active = 1;
  }else{
    active = 0;
  }

  if(sensor == "ljus sensorn"){
    if(lights[(number-1)][3] == active){
      return true;
    }
  }else if(sensor == "ljud sensorn"){
    if(lights[number-1][4] == active){
      return true;
    }
  }else if(sensor == "tryck sensorn"){
    if(lights[number-1][5] == active){
      return true;
    }
  }else{
    return false;
  }
}

function setLightpostColor(block){



  var postId = block.children[3].childNodes[0].childNodes[3].attributes.id;
  var colorId = block.children[5].childNodes[0].childNodes[3].attributes.id;

  var number = document.getElementById(postId.value).value;
  var color = document.getElementById(colorId.value).value;


  if(color == "rött"){
    changeColor(number,1,0,0);
  }else if(color == "grönt"){
    changeColor(number,0,1,0);
  }else if(color == "blått"){
    changeColor(number,0,0,1);
  }

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
