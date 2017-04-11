/* jshint ignore:start */

define('ImayavarambanR.github.io/config/environment', ['ember'], function(Ember) {
  var prefix = 'ImayavarambanR.github.io';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("ImayavarambanR.github.io/app")["default"].create({"name":"personal","version":"0.0.0+7eb54082"});
}

/* jshint ignore:end */
