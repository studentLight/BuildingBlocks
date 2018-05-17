import { Mongo } from 'meteor/mongo'

export const LightPosts = new Mongo.Collection('lightPosts');

export function changeColor(lampID, r, g, b){

  if(!controlInput(lampID, r, g, b)){
    console.log("No change in the dB: bad input");
    return;
  }

  console.log("Good input ");

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

  console.log("BUT DOES IT WORK? ",LightPosts.find({parkName: "Tegnerlunden"}).fetch());
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
