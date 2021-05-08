import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { createUseViewData, ViewDataType } from '../src/index';

interface AppProps {
  title: string;
}

type Data = ViewDataType<typeof useViewData>;

const useViewData = createUseViewData<AppProps>()(props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return {
    props,
    count,
    setCount
  };
});

const App: React.FC<AppProps> = props => {
  const data = useViewData(props);

  return <AddCount parent={data} />;
};

const AddCount: React.FC<{ parent: Data }> = ({ parent }) => {
  return (
    <div>
      <i>{parent.count}</i>
      <button onClick={() => parent.setCount(parent.count + 1)}>{parent.props.title}</button>
    </div>
  );
};

test('rendering child component by viewData', async () => {
  const wrapper = mount(<App title="Add" />);
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
