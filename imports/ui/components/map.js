import '../components/map.html';

Meteor.startup(function() {  
    GoogleMaps.load({ v: '3', key: 'AIzaSyAgjN9v8r4q8CBgGXiVnbcqUJASk9KkF3I', libraries: 'geometry,places' });
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
   let infowindow = new google.maps.InfoWindow({
       content: 'Parkinformation: Tegnerlunden'
   })
   marker.addListener('click', function(event){
         infowindow.open(map.instance, marker);
   })


    });
  });

