# jsx-sfc.macro

Babel macro for compile and enhance the limitation of `jsx-sfc` runtime code.

## Usage

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc.macro';

const App = sfc({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  styles: {
    Wrapper: styled.div`
      background-color: #fff;
    `
  }
});
```

## How it works

[The same as babel-plugin-jsx-sfc.](https://github.com/joe-sky/jsx-sfc/blob/main/packages/babel-plugin-jsx-sfc/README.md)

## License

MIT
