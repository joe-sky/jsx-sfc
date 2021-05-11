import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { createUseViewData, ViewDataType } from '../src/index';

type ViewData = ViewDataType<typeof useViewData>;

type AddCountProps = { text: string } & Pick<ViewData, 'count' | 'setCount'>;

const AddCount: React.FC<AddCountProps> = ({ text, count, setCount }) => {
  return (
    <div>
      <i>{count}</i>
      <button onClick={() => setCount(count + 1)}>{text}</button>
    </div>
  );
};

interface AppProps {
  title: string;
}

const useViewData = createUseViewData<AppProps>()(props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return {
    ...props,
    count,
    setCount
  };
});

const App: React.FC<AppProps> = props => {
  const data = useViewData(props);

  return (
    <div>
      <h1>{props.title}</h1>
      <AddCount text="Add" {...data} />
    </div>
  );
};

test('rendering child component by viewData', async () => {
  const wrapper = mount(<App title="test" />);
  expect(wrapper.find('button').text()).toEqual('Add');

  await act(async () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
  });
  wrapper.update();
  expect(wrapper.find('i').text()).toEqual('1');
});

const TestAddCount: React.FC<{ text: string }> = ({ text }) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <b>{count}</b>
      <AddCount text={text} count={count} setCount={setCount} />
    </div>
  );
};

test('independent test child component', async () => {
  const wrapper = mount(<TestAddCount text="Delete" />);
  expect(wrapper.find('button').text()).toEqual('Delete');

  await act(async () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
  });
  wrapper.update();
  expect(wrapper.find('b').text()).toEqual('2');
});
