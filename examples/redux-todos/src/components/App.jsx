import React from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';
import Sidebar from './Sidebar';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = sfc({
  Component({ styles: { Wrapper } }) {
    return (
      <Wrapper>
        <Sidebar />
        <div className="content">
          <AddTodo />
          <VisibleTodoList />
        </div>
      </Wrapper>
    );
  },

  styles: {
    Wrapper: styled.div`
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;
      height: 100%;

      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px 40px;
      }
    `
  }
});

export default App;
