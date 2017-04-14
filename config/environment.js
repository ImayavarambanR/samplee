/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'personal',
    environment: environment,
    baseURL: 'https://imayavarambanr.github.io/samplee/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyAB_Fwgs9Ae5R1LCKoRq1q0ShCGihGqATs",
      authDomain: "samplee-a70d2.firebaseapp.com",
      databaseURL: "https://samplee-a70d2.firebaseio.com",
      storageBucket: "samplee-a70d2.appspot.com",
      messagingSenderId: "426805753692"
    },

    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseUrl = '/personal/';

  }

  return ENV;
};
