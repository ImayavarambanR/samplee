define('personal/tests/helpers/resolver', ['exports', 'ember/resolver', 'personal/config/environment'], function (exports, _emberResolver, _personalConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _personalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _personalConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});