<h1 align="center">
  🕹 use-templates
</h1>

## Introduction

`use-templates` is a tiny custom hook for render JSX tags of components with **separation of concerns**.

## Features

- 🚀 No any dependencies

## Installation

```bash
npm install use-templates
```

## Usage

`use-templates` can work with React or Vue(v3), the usage is almost same. But there are differences in the implementation:

- In React, `use-templates` returns the JSX results directly;

- In Vue, `use-templates` returns a render function.

### Using with React

```tsx
import { useState } from 'react';
import useTemplates, { Template } from 'use-templates';

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
```

### Using with Vue

```tsx
import { defineComponent, reactive } from 'vue';
import useTemplates, { Template } from 'use-templates/vue';

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
```

> Documentation to be completed
