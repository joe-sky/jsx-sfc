import React, { Fragment, useState, useEffect, useImperativeHandle, createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc from '../src/index';

interface AppProps {
  test?: string;
}

interface AppRef {
  getName: () => string;
}

const App = sfc.forwardRef<AppRef, AppProps>()({
  Component: ({ test }, ref) => {
    useImperativeHandle(ref, () => ({
      getName: () => 'test'
    }));

    return { a: test };
  },

  render({ data, styles: { Container } }) {
    return (
      <Container>
        <div>{data.a}</div>
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

const AppHasRender = sfc.forwardRef({
  Component(props, ref) {
    useImperativeHandle(ref, () => ({
      getName: () => 'test'
    }));

    return {};
  },

  render({ styles: { Container } }) {
    return (
      <Container>
        <div>test</div>
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

describe('forward ref basic', function() {
  const ref = createRef<AppRef>();
  const app = mount(<App test="1" ref={ref} />);

  it('simple', () => {
    expect(ref.current?.getName()).toEqual('test');
  });

  const appHasRender = mount(<AppHasRender />);

  it('has render', () => {
    expect(appHasRender.html()).toContain('<div>test</div>');
  });
});
