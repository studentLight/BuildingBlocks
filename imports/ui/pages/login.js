import './login.html';
import '../components/header.js';
import '../components/overrides/overrides.js';

import { Meteor } from 'meteor/meteor';

import {pageInitialize} from '../../api/pageInit.js'

Template.login.onRendered(function(){
  pageInitialize();
});


// Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
//     if (err) {
//         console.log('Handle errors here: ', err);
//     }
// });

// Google
Meteor.loginWithGoogle({
  requestPermissions: ['user_friends', 'public_profile', 'email']
}, (err) => {
  if (err) {
    // handle error
  } else {
    // successful login!
  }
});
