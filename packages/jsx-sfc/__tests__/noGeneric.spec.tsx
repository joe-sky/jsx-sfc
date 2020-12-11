import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../src/index';

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

    style: () => ({
      Container: styled.section`
        color: #fff;
      `,
      hl: css`
        width: 50px;
      `
    })
  },
  {
    constant: () => ({
      LAST_NAME: 'sky'
    }),

    utils: () => ({
      connectName: (firstName: string, lastName: string) => `${firstName}_${lastName}`
    })
  }
);

describe('component basic', function() {
  const app = mount(<App />);
  it('simple', () => {
    expect(app.html()).toContain('<div>joe_sky</div>');
  });

  it('export extension items', () => {
    expect(App.utils.connectName).toBeDefined();
  });
});
