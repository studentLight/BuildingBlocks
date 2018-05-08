


function extractParks(parks){

  for(var i = 0; i < parks.length; i++) {
    var obj = parks[i];


    console.log("Obj logging", obj);
  }
}

export function getSthlmParks(){

  const sthlmapi = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes/9da341e4-bdc6-4b51-9563-e65ddc2f7434/ServiceUnits/json?apikey=83cc8184e26f48369d22259c7c016825';

  fetch(sthlmapi).then(response => response.json()).then((parks) => {

    extractParks(parks);

  }).catch(err => console.error(err));


}
