import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/home.js';
import '../../ui/pages/mapPage.js';
import '../../ui/pages/challengesPage.js';

FlowRouter.route('/', {
    name: 'home', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('home'); //Render our HomeLayout as soon as we route to /home
    }
});

FlowRouter.route('/mapPage', {
    name: 'mapPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('mapPage'); //Render our HomeLayout as soon as we route to /home
    }
});

FlowRouter.route('/challengesPage', {
    name: 'challengesPage', //Reference name
    action() {  //What actually happens.
        BlazeLayout.render('challengesPage'); //Render our HomeLayout as soon as we route to /home
    }
});
