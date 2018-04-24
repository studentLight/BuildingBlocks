import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/home.js';

FlowRouter.route('/', {
    name: 'home', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('home'); //Render our HomeLayout as soon as we route to /home
    }
});
