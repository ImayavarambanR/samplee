/* jshint ignore:start */

define('personal/config/environment', ['ember'], function(Ember) {
  var prefix = 'personal';
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
  require("personal/app")["default"].create({"name":"personal","version":"0.0.0+b9f9408c"});
}

/* jshint ignore:end */
