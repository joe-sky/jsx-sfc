import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../src/index';

const {
  Component: App,
  utils: { connectName },
  styles: { Container, hl }
} = sfc({
  Component({ utils, constant: { LAST_NAME } }) {
    return {
      firstName: 'joe',
      LAST_NAME,
      onChange: e => console.log(e.target.value)
    };
  },

  static: () => {
    const abc = a => 123;

    const connectName = (firstName, lastName) => `${firstName}_${lastName}`;

    return {
      emptyStr: '',

      defaultProps: {
        test: '123'
      },

      abc,

      constant: {
        LAST_NAME: 'sky'
      },

      utils: {
        connectName
      }
    };
  },

  render: ({ data, styles, utils: { connectName }, emptyStr, abc }) => (
    <Container>
      <div>{connectName(data.firstName, data.LAST_NAME)}</div>
      <input onChange={data.onChange} />
    </Container>
  ),

  styles: () => ({
    Container: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  })
});

describe('component basic in jsx environment', function() {
  const app = mount(<App />);

  it('simple', () => {
    expect(app.html()).toContain('<div>joe_sky</div>');
  });

  it('export extension items', () => {
    expect(connectName).toBeDefined();
  });
});

const WithHooks = sfc({
  Component({ useCount }) {
    const { count, increase, reset } = useCount(0);

    return {
      count,
      onClickAdd() {
        increase();
      },
      onClickReset() {
        reset();
      }
    };
  },

  static: () => {
    const INCREASE_NUM = 1;

    function useCount(initial = 0) {
      const [count, setCount] = useState(initial);

      useEffect(() => {
        setCount(count + INCREASE_NUM);
      }, []);

      return {
        count,
        increase() {
          setCount(count + INCREASE_NUM);
        },
        reset() {
          setCount(initial);
        }
      };
    }

    return {
      INCREASE_NUM,
      useCount,

      styles: {
        hl
      }
    };
  },

  render: ({ data, styles }) => (
    <Container css={styles.hl}>
      <i>{data.count}</i>
      <button className="add" onClick={data.onClickAdd}>
        Add
      </button>
      <button className="reset" onClick={data.onClickReset}>
        Reset
      </button>
    </Container>
  )
});

describe('with custom hooks in jsx environment', function() {
  const app = mount(<WithHooks />);

  it('add count', () => {
    app
      .find('button.add')
      .at(0)
      .simulate('click', { target: { value: '' } });
    app.update();

    expect(app.html()).toContain('<i>2</i>');
  });

  it('reset count', () => {
    app
      .find('button.reset')
      .at(0)
      .simulate('click', { target: { value: '' } });
    app.update();

    expect(app.html()).toContain('<i>0</i>');
  });
});
