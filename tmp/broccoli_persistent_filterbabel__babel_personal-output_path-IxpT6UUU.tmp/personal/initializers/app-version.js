define('personal/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'personal/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _personalConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_personalConfigEnvironment['default'].APP.name, _personalConfigEnvironment['default'].APP.version)
  };
});