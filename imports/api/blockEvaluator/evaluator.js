//import {changeColor} from '../collections/lightPosts.js';
import { LightPosts } from '../collections/lightPosts.js';

var functionOkey = false;
var blockStatus = [];

export function runCode(blocks){

  for(var i = 0; i < blocks.length; i++){
    blockStatus.push(0);
  }

  for(var i = 0; i<10; i++){
    var lights = LightPosts.find().fetch();
    lights = lights[0].lamps;

    evaluateBlocks(blocks);

    sleep(500);
  }

}

function evaluateBlocks(blocks){
  for(var i = 0; i < blocks.length; i++){
    console.log(blocks[i].name);
    if(evaluateBlock(blocks[i])){

    }
  }
}

function evaluateBlock(block){
  
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
