import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sfc, { Template } from 'jsx-sfc';

const Todo = sfc({
  template: ({ data, styles: { Wrapper } }, Icon) => (
    <>
      <Template name={Icon}>
        {({ completed }) =>
          completed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="9 11 12 14 23 3"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
          )
        }
      </Template>

      <Template>
        {() => (
          <Wrapper onClick={data.onClick}>
            <Icon.template completed={data.completed} />
            <span className="text">{data.text}</span>
          </Wrapper>
        )}
      </Template>
    </>
  ),

  Component(props) {
    return { ...props };
  },

  styles: {
    Wrapper: styled.li`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 4px;
      border-bottom: 1px solid #eee;
      line-height: 24px;
      font-size: 110%;

      &:hover {
        background: #efefef;
      }

      .text {
        padding-left: 5px;
      }
    `
  }
});

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
