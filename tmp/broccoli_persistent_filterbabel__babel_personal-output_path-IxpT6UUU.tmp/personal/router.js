define('personal/router', ['exports', 'ember', 'personal/config/environment'], function (exports, _ember, _personalConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _personalConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('about');
    this.route('myself');
  });

  exports['default'] = Router;
});