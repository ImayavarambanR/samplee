define('personal/tests/routes/myself.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/myself.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/myself.js should pass jshint.');
  });
});