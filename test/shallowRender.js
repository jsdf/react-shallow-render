var tap = require('tap');
var React = require('react');
var shallowRender = require('../');

tap.test('it works', function (t) {
  var type = 'div';
  var props = {className: 'test'};
  t.similar(shallowRender(React.createElement(type, props)), {type: type, props: props});
  t.end();
});
