import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/homePage.js';
import '../../ui/pages/mapPage.js';
import '../../ui/pages/codePage.js';
import '../../ui/pages/parkPage.js';

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

FlowRouter.route('/codePage', {
    name: 'codePage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('codePage'); //Render our HomeLayout as soon as we route to /home
    }
});

FlowRouter.route('/parkPage', {
    name: 'parkPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('parkPage'); //Render our HomeLayout as soon as we route to /home
    }
});
