<h1 align="center">
  🕹 use-templates
</h1>

## Introduction

`use-templates` is a tiny custom hook(~600b) that help you to better implement **separation of concerns** within JSX based functional components.

## Features

- 🌟 Clear syntax design based on JSX and render props pattern
- 💫 Support rendering JSX by blocks, each block can have its own logic codes([See here for details](#what-logic-code-is-suitable-for-separate-jsx-blocks))
- 🚀 Tiny size, only ~600b and no any dependencies

## Motivation

When we write function components, we are used to extracting some logic independently as inline functions according to the division of responsibilities. This includes various event handlers for UI components, as well as some reusable rendering logic with JSX. For example:

```tsx
const QueryForm: React.FC = () => {
  const store = useStore();

  function renderOptions(list: Item[]) {
    return list.map((item, index) => (
      <Option key={index} value={item.value} label={item.label}>
        {item.label}
      </Option>
    ));
  }

  const typesData = renderOptions(store.typeList);
  const statusData = renderOptions(store.statusList);

  if (typesData.length < 1) {
    return <div className="empty">No type data</div>;
  } else if (statusData.length < 1) {
    return <div className="empty">No status data</div>;
  }

  function onQuery() {
    store.setPaginationItem({ pageNum: 1 });
    store.getList();
  }

  useEffect(() => {
    onQuery();
  }, []);

  function onTypeChange(value: number) {
    store.setQueryFormItem({ type: value });
  }

  function onStatusChange(value: number) {
    store.setQueryFormItem({ status: value });
  }

  function onReset() {
    store.resetQueryForm();
  }

  return (
    <div>
      <Row className="item-list">
        <Col span={8}>
          <Select value={store.queryForm.type} onChange={onTypeChange}>
            {typesData}
          </Select>
        </Col>
        <Col span={8}>
          <Select value={store.queryForm.status} onChange={onStatusChange}>
            {statusData}
          </Select>
        </Col>
      </Row>
      <div className="item-buttons">
        <Button onClick={onQuery}>Search</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
};
```

Let's look at the above code and you can see that there are several potential problems that may be optimized:

- All the logic codes before the return statement of the component are mixed together, and they have no clear categories;

- The part of JSX before the return statement is mixed with the logic code, which seems a bit confusing;

- All the event handlers, we need to name them individually.

These potential problems are more obvious when we develop components with more code. Even if we use custom hooks to extract the logic code out of the component function, we can not solve these problems perfectly.

So, the `use-templates` hook was created to solve the above problems. Let's rewrite the code:

```tsx
const QueryForm: React.FC = () => {
  const store = useStore();

  function onQuery() {
    store.setPaginationItem({ pageNum: 1 });
    store.getList();
  }

  useEffect(() => {
    onQuery();
  }, []);

  return useTemplates(
    (
      renderOptions: Template.Render<Item[]>,
      typeField: Template.Render<ReactNode[]>,
      statusField: Template.Render<ReactNode[]>
    ) => (
      <>
        <Template name={renderOptions}>
          {list =>
            list.map((item, index) => (
              <Option key={index} value={item.value} label={item.label}>
                {item.label}
              </Option>
            ))
          }
        </Template>

        <Template name={typeField}>
          {options => {
            function onChange(value: number) {
              store.setQueryFormItem({ type: value });
            }

            return (
              <Col span={8}>
                <Select value={store.queryForm.type} onChange={onChange}>
                  {options}
                </Select>
              </Col>
            );
          }}
        </Template>

        <Template name={statusField}>
          {options => {
            function onChange(value: number) {
              store.setQueryFormItem({ status: value });
            }

            return (
              <Col span={8}>
                <Select value={store.queryForm.status} onChange={onChange}>
                  {options}
                </Select>
              </Col>
            );
          }}
        </Template>

        <Template>
          {() => {
            const typeOptions = renderOptions.render(store.typeList);
            const statusOptions = renderOptions.render(store.statusList);

            if (typeOptions.length < 1) {
              return <div className="empty">No type data</div>;
            } else if (statusOptions.length < 1) {
              return <div className="empty">No status data</div>;
            }

            function onReset() {
              store.resetQueryForm();
            }

            return (
              <div>
                <Row className="item-list">
                  {typeField.render(typeOptions)}
                  {statusField.render(statusOptions)}
                </Row>
                <div className="item-buttons">
                  <Button onClick={onQuery}>Search</Button>
                  <Button onClick={onReset}>Reset</Button>
                </div>
              </div>
            );
          }}
        </Template>
      </>
    )
  );
};
```

We can see that:

- After using `use templates`, we can plan the code in the function component according to the business logic and put the related logic together with the related JSX;

- The business logic of each category is isolated in a separate template tag, and the code looks will be very clear. We just need to find the category name in the parameter of `use templates` and can find the template tag with the corresponding name property quickly;

- Because each template tag has a separate scope, it's not necessary to pay too much attention to the naming of event handlers.

### What logic code is suitable for separate JSX blocks

From the summary of daily development, there are the following categories:

- Event handlers

- Complex logic with JSX

- Control flow statement with JSX

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

[See here for more details of usage.](https://github.com/joe-sky/jsx-sfc#template-tags)

## Change Logs

[Check here.](https://github.com/joe-sky/jsx-sfc/blob/main/CHANGELOG.md)

## License

MIT

<!-- > Documentation to be completed -->
