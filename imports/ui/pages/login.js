import './login.html';
import '../components/header.js';
import '../components/overrides/overrides.js';

import {pageInitialize} from '../../api/pageInit.js'

Template.login.onRendered(function(){
  pageInitialize();
});
