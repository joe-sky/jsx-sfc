import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import * as nt from '../src/index';

/** @jsx jsx */
const jsx = nt.bind(React.createElement, { Fragment });

const PInDiv = nt.defineElement((props, children, { h }) => <div {...props}>{h('p', null, ...children)}</div>);

const TestPinDiv = props => {
  return <PInDiv>test</PInDiv>;
};

describe('custom elements', function() {
  const app = mount(<TestPinDiv />);

  it('p-in-div', () => {
    expect(app.html()).toContain('<p>test</p>');
  });
});
