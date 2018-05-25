
import './fixtures.js';

Meteor.startup(function() {

    // ServiceConfiguration.configurations.update(
    //   { "service": "facebook" },
    //   {
    //     $set: {
    //       "appId": "236327320449093",
    //       "secret": "790a817c808fcece161de2834e888966"
    //     }
    //   },
    //   { upsert: true }
    // );

      ServiceConfiguration.configurations.update(
        { "service": "google" },
        {
          $set: {
            "loginStyle": 'popup',
            "clientId": "359561534822-u3sjlffdjr4hbes4gjfn81t4do8jmklb.apps.googleusercontent.com",
            "secret": "XQG0ivvIxwW_nPfq5I3mq7XC"
          }
        },
        { upsert: true }
      );


});
