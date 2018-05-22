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
  for(var i = 0; i<30; i++){
    lights  = LightPosts.find({parkName: "Tegnerlunden"}).fetch();
    lights = lights[0].lamps;
    evaluateBlocks(blocks);
    sleep(10);
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
  const isActive = 1;//dont change!

  var number = 3;//block.number;
  var sensor = "light";//block.sensor;
  var active = true;//block.active;
  changeStatusForLightposts(number, sensor, active);

  if(sensor == "light"){
    if(lights[(number-1)][3] == isActive){
      return true;
    }
  }else if(sensor == "sound"){
    if(lights[number-1][4] == isActive){
      return true;
    }
  }else if(sensor == "push"){
    if(lights[number-1][5] == isActive){
      return true;
    }
  }else{
    return false;
  }
}

function setLightpostColor(block){
  var number = 3;//block.number;
  var color = "green";//block.color

  if(color == "red"){
    changeColor(number,1,0,0);
  }else if(color == "green"){
    changeColor(number,0,1,0);
  }else if(color == "blue"){
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
