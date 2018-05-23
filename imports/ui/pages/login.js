import './login.html';
import '../components/header.js';
import '../components/overrides/overrides.js';

import { Meteor } from 'meteor/meteor';

import {pageInitialize} from '../../api/pageInit.js'

Template.login.onRendered(function(){
  pageInitialize();
});


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
