import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import useTemplates, { Template } from '../../src/index';

interface NavProps {
  profileHref: string;
  adminHref: string;
}

const Nav: React.FC<NavProps> = props => {
  const [count, setCount] = useState(0);

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
            setCount(count + 1);
          }

          return (
            <>
              <a id="admin" href={props.adminHref}>
                Admin{count}
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
};

test('rendering by useTemplates', async () => {
  const wrapper = mount(<Nav profileHref="/profile" adminHref="/admin" />);
  expect(wrapper.find('#profile').text()).toEqual('My Profile');

  const wrapper2 = mount(<Nav profileHref="/test" adminHref="/admin" />);
  expect(wrapper2.find('#profile').html()).toContain('/test');

  await act(async () => {
    wrapper2
      .find('button')
      .at(0)
      .simulate('click');
  });
  wrapper2.update();
  expect(wrapper2.find('#admin').html()).toContain('Admin1');
});
