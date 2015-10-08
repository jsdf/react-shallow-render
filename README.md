# react-shallow-render
Convenience function for React Shallow Rendering

```js
import assert from 'assert';
import React from 'react';
import shallowRender from 'react-shallow-render';

const rendered = shallowRender(<div className="test" />);
assert.equal(rendered.type, 'div');
assert.equal(rendered.props.className, 'test');
```

Please note that as of React 0.14, [shallow rendering won't render
primitives](https://github.com/facebook/react/issues/4721).
[The good thing is that you don't need it](https://github.com/facebook/react/issues/4721#issuecomment-135923690)
as you can just do:

```
var el = React.createElement('h1', {}, 'Hello');
console.log(el);
```
