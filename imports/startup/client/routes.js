import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/homePage.js';
import '../../ui/pages/mapPage.js';

FlowRouter.route('/', {
    name: 'homePage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('homePage'); //Render our HomeLayout as soon as we route to /home
    }
});

FlowRouter.route('/mapPage', {
    name: 'mapPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('mapPage'); //Render our HomeLayout as soon as we route to /home
    }
});
