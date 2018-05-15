import { Mongo } from 'meteor/mongo'

export const LightPosts = new Mongo.Collection('lightPosts');

export function changeColor(lampID, r, g, b){

  if(!controlInput(lampID, r, g, b)){
    console.log("No change in the dB: bad input");
    return;
  }

  console.log("Good input");

  var lights = LightPosts.find().fetch();
  lights = lights[0].lamps;

  console.log("LampID ", lights[0][0]);


}

function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

function controlInput(lampID, r, g, b){
  if( !(isInt(r) && isInt(g) && isInt(b)) ){
    return false;
  }else{
    if(!isInt(lampID) || lampID < 0 || lampID > 6 ){
      return false;
    }
  }
  return true;
}
