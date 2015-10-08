var tap = require('tap');
var React = require('react');
var shallowRender = require('../');

var type = 'div';
var props = {className: 'test'};
function Test(props) {
  return React.createElement(type, props);
}

tap.test('it works', function (t) {
  var $component = shallowRender(React.createElement(Test, props));

  t.equals($component.type, type, 'matches the type');
  t.deepEquals($component.props, props, 'matches the props');

  t.end();
});
