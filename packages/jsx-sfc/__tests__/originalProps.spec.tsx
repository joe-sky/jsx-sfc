import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../src/index';

interface AppProps {
  test?: string;
}

const App = sfc<AppProps>()({
  Component: ({ styles: { Container }, originalProps }) => {
    return (
      <Container>
        <div>{originalProps.test}</div>
      </Container>
    );
  },

  styles: () => ({
    Container: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  })
});

describe('originalProps', function() {
  const app = mount(<App test="1" />);
  it('has props', () => {
    expect(app.html()).toContain('<div>1</div>');
  });

  const app2 = mount(<App />);
  it('no props', () => {
    expect(app2.html()).toContain('<div></div>');
  });
});
