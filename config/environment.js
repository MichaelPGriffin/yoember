/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'yoember',
    environment,
    rootURL: '/',
    locationType: 'auto',


    // Firebase config details, and database info:
    //   You can view the database's contents (email addresses)
    //   at https://console.firebase.google.com/project/yoember-22/database/data
    //
    //  Here are the various permissioning/config details required to interact with Firebase.
    firebase: {
      apiKey: "AIzaSyAC6vygO63vvXyjJwH7rVcklzmH2mO6tpI",
      authDomain: "yoember-22.firebaseapp.com",
      databaseURL: "https://yoember-22.firebaseio.com",
      projectId: "yoember-22",
      storageBucket: "",
      messagingSenderId: "107287202167"
    },

    /* /////////////////////////////////////////////////////////
    // Content Security Policy details from running:
    // `ember install emberfire`
    //
    //  (Please note you may have to update a few single quotes to 
    //  double-quotes in contentSecurityPolicy, check my code snippet 
    //  below, double-quotes are corrected there.)

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    }
    */ ///////////////////////////////////////////////////////

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
