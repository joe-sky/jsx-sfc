import React, { Fragment, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { observer as observerLite } from 'mobx-react-lite';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { ComponentDataType, createTemplate, TemplateRender } from '../src/index';

interface AppProps {
  test?: string;
}

const App = observer(
  sfc<AppProps>()({
    Component: (props) => {
      return { a: props.test };
    },

    static: () => {
      return {
        emptyStr: '',
        defaultProps: {
          test: '123'
        }
      };
    },

    render({ data, styles: { Container }, emptyStr }) {
      return (
        <Container>
          <div>
            {data.a}
            {emptyStr}
          </div>
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
  })
);

const AppNoTmpl = observerLite(
  sfc<AppProps>()({
    Component({ test, styles: { Container } }) {
      return (
        <Container>
          <div>{test}</div>
        </Container>
      );
    },

    static: () => {
      return {
        defaultProps: {
          test: '123' // 如不设置默认值，使用observerLite时类型会报错
        }
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
  })
);

describe('basic', function () {
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
