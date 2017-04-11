define('personal/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'personal/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _personalConfigEnvironment) {

  var name = _personalConfigEnvironment['default'].APP.name;
  var version = _personalConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});