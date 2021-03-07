import React from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';
import FilterLink from '../containers/FilterLink';

const Sidebar = sfc({
  Component({ styles: { Wrapper } }) {
    return (
      <Wrapper>
        <li className="Sidebar_filter">
          <FilterLink filter="SHOW_ALL">All</FilterLink>
        </li>
        <li className="Sidebar_filter">
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        </li>
        <li className="Sidebar_filter">
          <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </li>
      </Wrapper>
    );
  },

  styles: {
    Wrapper: styled.ul`
      height: 100%;
      margin: 0;
      padding: 20px 0;
      background: #222628;
      list-style: none;
    `
  }
});

export default Sidebar;
