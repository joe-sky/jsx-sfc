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
  Component: ({ styles: { Container }, props }) => {
    return (
      <Container>
        <div>{props.test}</div>
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

describe('props in Component', function() {
  const app = mount(<App test="1" />);
  it('has props', () => {
    expect(app.html()).toContain('<div>1</div>');
  });

  const app2 = mount(<App />);
  it('no props', () => {
    expect(app2.html()).toContain('<div></div>');
  });
});

const App2 = sfc<AppProps>()({
  template: ({ data, props, styles: { Container } }) => (
    <Container>
      <div>
        {data.no}-{props.test}
      </div>
    </Container>
  ),

  Component: props => {
    return {
      no: 0,
      test: props.test
    };
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

describe('props in template', function() {
  const app = mount(<App2 test="1" />);
  it('has props', () => {
    expect(app.html()).toContain('<div>0-1</div>');
  });

  const app2 = mount(<App2 />);
  it('no props', () => {
    expect(app2.html()).toContain('<div>0-</div>');
  });
});
