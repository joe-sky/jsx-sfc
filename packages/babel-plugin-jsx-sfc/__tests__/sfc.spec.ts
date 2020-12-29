import { transform } from './utils';

const code = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

const App = sfc(
  {
    template: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component: props => {
      return props.template({ firstName: 'joe' });
    },

    style: () => ({})
  },
  {
    constant: () => ({
      LAST_NAME: 'sky'
    }),

    utils: () => ({
      connectName: (firstName: string, lastName: string) => firstName + lastName
    })
  }
);
`;

const snapshot = `sfc(
  props => {
    return props.template({ firstName: 'joe' });
  }`;

describe('basic', function() {
  const compiled = transform(code);
  console.log(compiled);
  it('simple', () => {
    expect(compiled).toContain(snapshot);
  });
});
