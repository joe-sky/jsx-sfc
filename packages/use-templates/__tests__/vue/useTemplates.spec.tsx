// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
import { mount } from '@vue/test-utils';
/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, defineComponent, reactive } from 'vue';
import useTemplates, { Template } from '../../src/vue/index';

const Nav = defineComponent({
  props: {
    profileHref: String,
    adminHref: String
  },

  setup(props) {
    const state = reactive({
      count: 0
    });

    return useTemplates((profile, admin) => (
      <>
        <Template name={profile}>
          {() => (
            <a id="profile" href={props.profileHref}>
              My Profile
            </a>
          )}
        </Template>

        <Template name={admin}>
          {() => {
            function onClick() {
              state.count++;
            }

            return (
              <>
                <a id="admin" href={props.adminHref}>
                  Admin{state.count}
                </a>
                <button onClick={onClick}>add count</button>
              </>
            );
          }}
        </Template>

        <Template>
          {() => (
            <nav>
              {profile.render()}
              {admin.render()}
            </nav>
          )}
        </Template>
      </>
    ));
  }
});

test('rendering by useTemplates', async () => {
  const wrapper = mount(Nav, {
    props: {
      profileHref: '/profile',
      adminHref: '/admin'
    }
  });

  const profileLink = wrapper.get('#profile');
  expect(profileLink.text()).toEqual('My Profile');

  await wrapper.setProps({ profileHref: '/test' });
  expect(profileLink.html()).toContain('/test');

  const adminLink = wrapper.get('#admin');
  await wrapper.find('button').trigger('click');
  expect(adminLink.html()).toContain('Admin1');
});
