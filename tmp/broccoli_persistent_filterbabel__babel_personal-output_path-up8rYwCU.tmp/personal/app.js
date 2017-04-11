define('personal/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'personal/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _personalConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _personalConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _personalConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _personalConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});