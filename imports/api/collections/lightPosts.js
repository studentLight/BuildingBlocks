import { Mongo } from 'meteor/mongo'

export const LightPosts = new Mongo.Collection('lightPosts');

export function changeColor(lampID, r, g, b){

  if(!controlInput(lampID, r, g, b)){
    console.log("No change in the dB: bad input");
    return;
  }

  var lights = LightPosts.find({parkName: "Tegnerlunden"}).fetch();

  var tmpID = lights[0]._id;

  lights = lights[0].lamps;
  //{parkName: "Tegnerlunden"}

  lights[(lampID-1)][6] = r;
  lights[(lampID-1)][7] = g;
  lights[(lampID-1)][8] = b;

  //LightPosts.update()

  LightPosts.update(
    {_id: tmpID},
    { $set: {lamps: lights} }
  )

}


export function getColor(lampID){
  var lights = LightPosts.find({parkName: "Tegnerlunden"}).fetch();
  lights = lights[0].lamps;

  var r = lights[(lampID-1)][6];
  var g = lights[(lampID-1)][7];
  var b = lights[(lampID-1)][8];
  var rgb = [r,g,b];
  return rgb;
}


//sensorIndex --> 3=light, 4=sound, 5=push
export function changeStatusForLightposts(lampID, sensor, isOn){
  var sensorIndex;
  if(sensor == "light"){
    sensorIndex = 3;
  }else if(sensor == "sound"){
    sensorIndex = 4;
  }else if(sensor == "push"){
    sensorIndex = 5;
  }else{
    console.log("Not a valid sensor");
  }

  var activationValue;
  if(isOn == true){
    activationValue=1;
  }else{
    activationValue=0;
  }

  var lights = LightPosts.find({parkName: "Tegnerlunden"}).fetch();
  var tmpID = lights[0]._id;
  lights = lights[0].lamps;
  lights[(lampID-1)][sensorIndex] = activationValue;

  LightPosts.update(
    {_id: tmpID},
    { $set: {lamps: lights} }  );
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
    if(!isInt(lampID) || lampID < 1 || lampID > 6 ){
      return false;
    }
  }
  return true;
}
