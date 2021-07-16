import { parse } from '../';

const code = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

const App = sfc(
  {
    template: ({ data, styles: { Container } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component: props => {
      return { firstName: 'joe', styles: props.styles };
    },

    styles: () => ({})
  }
);

const App2 = sfc(
  {
    Component: props => {
      return { firstName: 'joe', styles: props.styles };
    },

    render: ({ data, styles: { Container } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    styles: () => ({})
  }
);
`;

test('parse', async () => {
  const blocks = parse(code);

  expect(blocks.component).toEqual([
    { locStartOffset: 288, locEndOffset: 372 },
    { locStartOffset: 432, locEndOffset: 516 }
  ]);
  expect(blocks.template).toEqual([
    { locStartOffset: 130, locEndOffset: 281 },
    { locStartOffset: 523, locEndOffset: 672 }
  ]);
  expect(blocks.styles).toEqual([
    { locStartOffset: 379, locEndOffset: 397 },
    { locStartOffset: 679, locEndOffset: 697 }
  ]);
});
