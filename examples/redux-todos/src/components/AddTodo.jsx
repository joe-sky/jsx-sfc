import React, { useRef } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const AddTodo = sfc({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <form onSubmit={data.onSubmit}>
        <input ref={data.input} placeholder="Add a task..." />
      </form>
    </Wrapper>
  ),

  Component({ onSubmit }) {
    const input = useRef();

    return {
      input,
      onSubmit: e => {
        e.preventDefault();
        if (!input.current.value.trim()) {
          return;
        }
        onSubmit(input.current.value);
        input.current.value = '';
      }
    };
  },

  styles: {
    Wrapper: styled.div`
      width: 100%;

      input {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #bbb;
        border-radius: 4px;
        font-size: 120%;
      }
    `
  }
});

export default AddTodo;
