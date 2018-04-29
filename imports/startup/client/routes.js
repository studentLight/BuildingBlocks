import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/homePage.js';
import '../../ui/pages/mapPage.js';
import '../../ui/pages/codePage.js';
import '../../ui/pages/parkPage.js';
import '../../ui/pages/challengesPage.js';
import '../../ui/pages/challengesDisplayPage.js';
import '../../ui/pages/login.js';


/**
*   checkLoggedIn() function:
*   If the user isn't logged in, redirect them to the login page.
**/
function checkLoggedIn(){
  if(!Meteor.userId()){
    FlowRouter.go("login");
  }
}


FlowRouter.route('/', {
    name: 'homePage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('homePage'); //Render our HomeLayout as soon as we route to /home
        checkLoggedIn();
    }
});

FlowRouter.route('/login', {
    name: 'login', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('login'); //Render
        checkLoggedIn();
    }
});

FlowRouter.route('/mapPage', {
    name: 'mapPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('mapPage'); //Render our HomeLayout as soon as we route to /home
        checkLoggedIn();
    }
});

FlowRouter.route('/codePage', {
    name: 'codePage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('codePage'); //Render our HomeLayout as soon as we route to /home
        checkLoggedIn();
    }
});

FlowRouter.route('/parkPage', {
    name: 'parkPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('parkPage'); //Render our HomeLayout as soon as we route to /home
        checkLoggedIn();
    }
});
FlowRouter.route('/challengesPage', {
    name: 'challengesPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('challengesPage'); //Render our HomeLayout as soon as we route to /home
        checkLoggedIn();
      }
});

  FlowRouter.route('/challengesDisplayPage', {
      name: 'challengesDisplayPage', //Reference name
      action() {  //What actually happens.
          BlazeLayout.render('challengesDisplayPage'); //Render our HomeLayout as soon as we route to /home
          checkLoggedIn();
        }
});
