import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../../src/index';

interface AppProps {
  test?: string;
}

const App = sfc<AppProps>()({
  template({ data, styles: { Container } }) {
    return (
      <Container>
        <div>{data.a}</div>
      </Container>
    );
  },

  Component: props => {
    return props.template({ a: props.test });
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

const AppNoTmpl = sfc<AppProps>()({
  Component({ test, styles: { Container } }) {
    return (
      <Container>
        <div>{test}</div>
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

describe('basic', function() {
  const app = mount(<App test="1" />);
  it('simple', () => {
    expect(app.html()).toContain('<div>1</div>');
  });

  it('export styles', () => {
    expect(App.styles.Container).toBeDefined();
  });

  const appNoTmpl = mount(<AppNoTmpl test="1" />);
  it('no template', () => {
    expect(appNoTmpl.html()).toContain('<div>1</div>');
  });
});

const AppMultiTmpls = sfc<AppProps>()({
  template({ data, styles: { Container } }, header: Template.Func<string>) {
    return (
      <>
        <Template name={header}>{content => <header>{content}</header>}</Template>

        <Template>
          {() => (
            <Container>
              {header.template(data.a)}
              <div>{data.a}</div>
            </Container>
          )}
        </Template>
      </>
    );
  },

  Component(props) {
    return props.template({ a: props.test });
  },

  styles: () => ({
    Container: styled.section`
      color: #fff;
    `
  })
});

describe('with multiple templates', function() {
  const appMultiTmpls = mount(<AppMultiTmpls test="1" />);
  it('simple', () => {
    expect(appMultiTmpls.html()).toContain('<header>1</header>');
  });
});
