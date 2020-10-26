import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import styled from '@emotion/styled';
import { sfc } from '../src/sfc';

const App = sfc<{ test?: string }>()({
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
    `
  }),

  components(styles) {
    return {
      Hl: props => <div>{props}</div>
    };
  }
});

describe('visible attribute', function() {
  const app = mount(<App test="1" />);
  it('visible true', () => {
    expect(app.html()).toContain('<i>test</i>');
  });
});
