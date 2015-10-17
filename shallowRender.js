var TestUtils = require('react-addons-test-utils');

function shallowRender(element) {
  var shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(element);
  return shallowRenderer.getRenderOutput();
}

module.exports = shallowRender;
