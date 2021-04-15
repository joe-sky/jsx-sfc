import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sfc from 'jsx-sfc';

const Link = sfc(
  {
    template({ data, styles: { Active, Normal } }) {
      if (data.active) {
        return <Active>{data.children}</Active>;
      }

      return (
        <Normal href="#" onClick={data.onClick}>
          {data.children}
        </Normal>
      );
    },

    Component({ active, children, onClick }) {
      return {
        active,
        children,
        onClick: e => {
          e.preventDefault();
          onClick();
        }
      };
    },

    styles: () => {
      const linkMixin = css`
        display: block;
        padding: 15px 40px;
        width: 100%;
        height: 100%;
        color: #c4c4c4;
        text-decoration: none;
        box-sizing: border-box;
      `;

      return {
        Normal: styled.a`
          ${linkMixin}
        `,

        Active: styled.div`
          ${linkMixin}
          color: #ffffff;
          background: #d3353e;
        `
      };
    }
  },

  {
    propTypes: {
      active: PropTypes.bool.isRequired,
      children: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired
    }
  }
);

export default Link;
