import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import sfc, { Template } from '../../src/index';

const {
  Component: App,
  constant: { LAST_NAME },
  utils
} = sfc(
  {
    template: ({ data, styles: { Container }, utils: { connectName } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component: props => {
      return props.template({ firstName: 'joe' });
    },

    styles: () => ({
      Container: styled.section`
        color: #fff;
      `,
      hl: css`
        width: 50px;
      `
    })
  },
  () => ({
    constant: {
      LAST_NAME: 'sky'
    },

    utils: {
      connectName: (firstName: string, lastName: string) => `${firstName}_${lastName}`
    }
  })
);

describe('component basic', function() {
  const app = mount(<App />);
  it('simple', () => {
    expect(app.html()).toContain('<div>joe_sky</div>');
  });

  it('export extension items', () => {
    expect(utils.connectName).toBeDefined();
  });
});

const App2 = sfc(
  ({ constant: { LAST_NAME }, utils: { connectName } }) => {
    const [firstName, setFirstName] = useState('joe');

    useEffect(() => {
      setFirstName(firstName + '_');
    }, []);

    return (
      <section>
        <div>{connectName(firstName, LAST_NAME)}</div>
      </section>
    );
  },
  () => ({
    constant: {
      LAST_NAME: 'sky'
    },

    utils: {
      connectName: (firstName: string, lastName: string) => `${firstName}_${lastName}`
    }
  })
);

describe('component function only', function() {
  const app = mount(<App2 />);
  it('simple', () => {
    expect(app.html()).toContain('<div>joe__sky</div>');
  });
});
