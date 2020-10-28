import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { sfc } from '../src/sfc';

interface AppProps {
  test?: string;
}

const App = sfc<AppProps>()({
  template(data, { styles: { Container }, components: Sub }) {
    return (
      <Container>
        <Sub.Hl>{data.a}</Sub.Hl>
      </Container>
    );
  },

  Component(props) {
    return props.template({ a: props.test });
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

describe('basic', function() {
  const app = mount(<App test="1" />);
  it('example 1', () => {
    expect(app.html()).toContain('<div>1</div>');
  });
});
