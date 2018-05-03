import '../components/map.html';

Meteor.startup(function() {
    GoogleMaps.load({ v: '3.exp', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry,places' });
  });


  //let LatLng = new google.maps.LatLng(59.33, 18.07)

  Template.map.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
            //koordinaterna som visas när kartan laddas

          center: new google.maps.LatLng(59.33, 18.07),
          zoom: 11
        };
      }
    }
  });

  //testkod för att se att kartan skapats i consolen
  Template.map.onRendered(function() {
    GoogleMaps.ready('map', function(map) {
      console.log('Map is ready')

      // The code shown below goes here
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.338408, 18.054466),

       map: map.instance
    })

    let contentstring = '<div id="content" style="text-align: center">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h4 id="firstHeading" class="firstHeading">Tegnerlunden</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Tegnérlunden</b> är en park i centrala Stockholm, på gränsen mellan stadsdelarna Norrmalm och Vasastaden' +
    '<a href="parkPage" class="waves-effect waves-light btn">Börja koda</a>'
    '</div>'+
    '</div>';

    let infowindow = new google.maps.InfoWindow({
       content: contentstring,
       maxWidth: 250,
   })
   marker.addListener('click', function(event){
         infowindow.open(map.instance, marker);
   })


    });
  });
/*
const sthlmapi = 'http://api.stockholm.se/ServiceGuideService/ServiceUnitTypes/9da341e4-bdc6-4b51-9563-e65ddc2f7434/ServiceUnits/json?apikey=83cc8184e26f48369d22259c7c016825';

  fetch(sthlmapi)
      .then(res => res.json())
      .then((data) => {
          console.log('Data: ', data);
  }).catch(err => console.error(err));

  */
