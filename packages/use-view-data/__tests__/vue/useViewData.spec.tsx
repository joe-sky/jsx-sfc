import { mount } from '@vue/test-utils';
/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, defineComponent, reactive, onMounted, PropType } from 'vue';
import { ViewDataType } from '../../src/index';

type Data = ViewDataType<typeof useViewData>;

function useViewData(props: { title: string }) {
  const state = reactive({
    count: 0
  });

  onMounted(() => {
    console.log('Mounted!');
  });

  return {
    props,
    state
  };
}

const App = defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup(props) {
    // eslint-disable-next-line
    const data = useViewData(props);

    // @ts-ignore
    return () => <AddCount parent={data} />;
  }
});

const AddCount = defineComponent({
  props: {
    parent: {
      type: Object as PropType<Data>,
      required: true
    }
  },

  setup({ parent }) {
    return () => (
      <div>
        <i>{parent.state.count}</i>
        <button onClick={() => (parent.state.count += 1)}>{parent.props.title}</button>
      </div>
    );
  }
});

test('rendering child component by viewData', async () => {
  const wrapper = mount(App, {
    props: {
      title: 'Add'
    }
  });

  const elButton = wrapper.get('button');
  expect(elButton.text()).toEqual('Add');

  await wrapper.setProps({ title: 'Add count' });
  expect(elButton.text()).toEqual('Add count');

  const elI = wrapper.get('i');
  await wrapper.find('button').trigger('click');
  expect(elI.text()).toEqual('1');
});
