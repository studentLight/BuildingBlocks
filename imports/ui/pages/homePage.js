

import '../components/navbar.js';
import './homePage.html';

import '../components/lightPostSensorForm.js';

Template.homePage.events({

  'click #sumbitSensorState': function(event) {
     event.preventDefault();

  },

 "click #sumbitSensorState": function(event){
    $('#modal2').openModal();
  },

});
