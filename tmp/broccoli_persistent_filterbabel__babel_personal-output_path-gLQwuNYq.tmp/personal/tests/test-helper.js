define('personal/tests/test-helper', ['exports', 'personal/tests/helpers/resolver', 'ember-qunit'], function (exports, _personalTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_personalTestsHelpersResolver['default']);
});