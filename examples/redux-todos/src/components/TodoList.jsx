import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sfc from 'jsx-sfc';
import Todo from './Todo';

const TodoList = sfc({
  Component({ todos, onTodoClick, styles: { Wrapper } }) {
    return (
      <Wrapper>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </Wrapper>
    );
  },

  styles: {
    Wrapper: styled.ul`
      margin: 20px 0;
      padding: 0;
    `
  }
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
