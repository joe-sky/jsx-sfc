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
`;

test('parse', async () => {
  const blocks = parse(code);

  expect(blocks.component).toEqual([
    { locStartOffset: 288, locEndOffset: 372 },
    { locStartOffset: 590, locEndOffset: 674 }
  ]);
  expect(blocks.template).toEqual([
    { locStartOffset: 130, locEndOffset: 281 },
    { locStartOffset: 432, locEndOffset: 583 }
  ]);
  expect(blocks.styles).toEqual([
    { locStartOffset: 379, locEndOffset: 397 },
    { locStartOffset: 681, locEndOffset: 699 }
  ]);
});
