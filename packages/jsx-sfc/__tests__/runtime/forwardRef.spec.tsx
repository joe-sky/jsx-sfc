import React, { Fragment, useState, useEffect, useImperativeHandle, createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../../src/index';

interface AppProps {
  test?: string;
}

interface AppRef {
  getName: () => string;
}

const App = sfc.forwardRef<AppRef, AppProps>()({
  template({ data, styles: { Container } }) {
    return (
      <Container>
        <div>{data.a}</div>
      </Container>
    );
  },

  Component: ({ template, test }, ref) => {
    useImperativeHandle(ref, () => ({
      getName: () => 'test'
    }));

    return template({ a: test });
  },

  style: () => ({
    Container: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  })
});

const AppNoGeneric = sfc.forwardRef({
  template({ styles: { Container } }) {
    return (
      <Container>
        <div>test</div>
      </Container>
    );
  },

  Component({ template }, ref) {
    useImperativeHandle(ref, () => ({
      getName: () => 'test'
    }));

    return template();
  },

  style: () => ({
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
    expect(ref.current.getName()).toEqual('test');
  });

  const appNoGeneric = mount(<AppNoGeneric />);

  it('no generic', () => {
    expect(appNoGeneric.html()).toContain('<div>test</div>');
  });
});
