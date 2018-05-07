import './challengesPage.html';

import '../components/navbar.js';


Template.challengesPage.events({

  "click .easySelect": function(event){
      Session.set('difficulty', 'Easy');
  },

  "click .mediumSelect": function(event){
       Session.set('difficulty', 'Medium');
  },

  "click .hardSelect": function(event){
       Session.set('difficulty', 'Hard' );
  },

});
