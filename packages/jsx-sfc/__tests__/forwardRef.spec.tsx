import React, { Fragment, useState, useEffect, useImperativeHandle, createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../src/index';

interface AppProps {
  test?: string;
}

interface AppRef {
  getName: () => string;
}

const App = sfc.forwardRef<AppRef, AppProps>()({
  template(data, { styles: { Container }, components: Sub }) {
    return (
      <Container>
        <Sub.Hl>{data.a}</Sub.Hl>
      </Container>
    );
  },

  Component({ template, test }, ref) {
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
  }),

  components({ hl }) {
    const Hl: React.FC = props => (
      <section css={hl}>
        <div>{props.children}</div>
      </section>
    );
    return { Hl };
  }
});

describe('forward ref basic', function() {
  const ref = createRef<AppRef>();
  const app = mount(<App test="1" ref={ref} />);

  it('example 1', () => {
    expect(ref.current.getName()).toEqual('test');
  });
});
