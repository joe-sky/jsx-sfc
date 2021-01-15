import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../src/index';

const {
  Component: App,
  constant: { LAST_NAME },
  utils: { connectName },
  styles: { Container }
} = sfc(
  {
    template: ({ data }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component: () => {
      return { firstName: 'joe' };
    },

    style: () => ({
      Container: styled.section`
        color: #fff;
      `,
      hl: css`
        width: 50px;
      `
    })
  },
  {
    constant: () => ({
      LAST_NAME: 'sky'
    }),

    utils: () => ({
      connectName: (firstName: string, lastName: string) => `${firstName}_${lastName}`
    })
  }
);

describe('component basic', function() {
  const app = mount(<App />);

  it('simple', () => {
    expect(app.html()).toContain('<div>joe_sky</div>');
  });

  it('export extension items', () => {
    expect(connectName).toBeDefined();
  });
});

const WithHooks = sfc(
  {
    template: ({ data }) => (
      <Container>
        <i>{data.count}</i>
        <button className="add" onClick={data.onClickAdd}>
          Add
        </button>
        <button className="reset" onClick={data.onClickReset}>
          Reset
        </button>
      </Container>
    ),

    Component: ({ localState: { useCount } }) => {
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
    }
  },
  {
    localState: () => ({
      useCount: (initial: number) => {
        const [count, setCount] = useState(initial);

        useEffect(() => {
          setCount(count + 1);
        }, []);

        return {
          count,
          increase() {
            setCount(count + 1);
          },
          reset() {
            setCount(initial);
          }
        };
      }
    })
  }
);

describe('with custom hooks', function() {
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
