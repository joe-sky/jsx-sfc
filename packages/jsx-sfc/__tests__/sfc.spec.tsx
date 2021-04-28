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
  template({ data, styles: { Container }, emptyStr }) {
    return (
      <Container>
        <div>
          {data.a}
          {emptyStr}
        </div>
      </Container>
    );
  },

  Component: props => {
    return { a: props.test };
  },

  options: () => {
    return { emptyStr: '' };
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
  template: (
    { data, styles: { Container } },
    header: Template.Render<string>,
    footer: Template.Render<string>,
    noop
  ) => (
    <>
      <Template name={header}>{content => <header>{content}</header>}</Template>

      <Template name={footer}>{content => <footer>{content}</footer>}</Template>

      {false && <Template name={noop}>{() => <></>}</Template>}

      <Template>
        {() => (
          <Container>
            {header.render(data.test)}
            <div>{data.test}</div>
            {footer.render(data.test)}
          </Container>
        )}
      </Template>
    </>
  ),

  Component(props) {
    return { test: props.test };
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

const AppButton = sfc({
  template({ data }) {
    return <button onClick={data.onClick}>{data.name}</button>;
  },

  Component() {
    return {} as { name: string; onClick: () => void };
  }
});

const AppButton1: React.FC = () => AppButton.template({ name: 'joe_sky', onClick: () => console.log('click!') });

const AppButton2: React.FC = () => {
  const [user, setUser] = useState('joe_sky');

  return (
    <ul>
      <li>{AppButton.template({ name: user, onClick: () => setUser(`${user} click!`) })}</li>
    </ul>
  );
};

describe('reusing template', function() {
  const appButton2 = mount(<AppButton2 />);
  it('simple', () => {
    expect(appButton2.html()).toContain('joe_sky');
  });
});
