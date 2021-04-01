import React, { forwardRef as forwardRefReact, Fragment, ReactElement } from 'react';
import { SFC, ForwardRefSFC, SFCOptions, SFCExtensions } from './defineComponent';
import { Template, isTemplate } from './template';
import { isFunc, noop, getFuncParams, emptyObjs, withOrigin, Func, Obj, FuncMap } from './utils';

const COMPILED_SIGN = '__cs';
const IS_PRODUTION = process.env.NODE_ENV === 'production';

export function createOptions(options: FuncMap, extensions?: Func | Obj, isRuntime?: boolean) {
  const ret: Obj = {};
  let template: Func = noop;

  Object.keys(options).forEach(key => {
    const item = options[key];
    if (key === 'template') {
      template = item as Func;
    } else if (key === 'styles') {
      ret[key] = isFunc(item) ? item() : item;
    }
  });

  const ex = isFunc(extensions) ? extensions() : extensions;
  ex && Object.assign(ret, ex);

  if (template) {
    const paramsCount = getFuncParams(template).length;
    ret.template =
      paramsCount > 1
        ? (data?: Template.Data) => {
            const jsxFragment: ReactElement = template({ data, ...ret }, ...emptyObjs(paramsCount - 1));
            if (!IS_PRODUTION && jsxFragment?.type !== Fragment) {
              throw new TypeError('The return of template with multiple arguments must be React.Fragment type.');
            }

            const tmplFcs: ReactElement<{ name?: Template.Func; children: Template.Func['template'] }>[] =
              jsxFragment.props.children;
            if (!IS_PRODUTION && !Array.isArray(tmplFcs)) {
              throw new RangeError('Must be at least 2 Template elements.');
            }

            let mainTemplate: Template.Func['template'] = noop;
            tmplFcs.forEach(item => {
              if (IS_PRODUTION || (item && isTemplate(item.type))) {
                const { name, children } = item.props;
                if (name) {
                  name.template = children;
                } else {
                  mainTemplate = children;
                }
              }
            });

            return mainTemplate();
          }
        : (data?: Template.Data) => template({ data, ...ret });
  }

  if (!isRuntime) {
    ret[COMPILED_SIGN] = true;
  }

  return ret;
}

function assignToComponent(component: Func, extensions: Obj) {
  return Object.assign(withOrigin(component), extensions);
}

function createSfc(isForwardRef?: boolean) {
  function defineSfc(options: SFCOptions, extensions?: SFCExtensions) {
    if (extensions?.[COMPILED_SIGN]) {
      delete extensions[COMPILED_SIGN];
      const Component = (options as any) as Func;
      const component = !isForwardRef ? Component : forwardRefReact(Component);

      return assignToComponent(component, extensions);
    } else {
      if (isFunc(options)) {
        options = { Component: options };
      }
      const { template, styles, Component } = options;
      const sfcOptions = createOptions({ template, styles }, extensions, true);

      let SeparateFunction: Func;
      if (!isForwardRef) {
        const InnerComponent: React.FC = Component;
        SeparateFunction = innerProps => {
          return <InnerComponent {...innerProps} {...sfcOptions} />;
        };
      } else {
        const InnerComponentWithRef = forwardRefReact(Component);
        SeparateFunction = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} {...sfcOptions} ref={ref} />;
        });
      }

      return assignToComponent(SeparateFunction, sfcOptions);
    }
  }

  return (options?: any, extensions?: any) => {
    if (options) {
      return defineSfc(options, extensions);
    } else {
      return defineSfc;
    }
  };
}

export const sfc: SFC = createSfc() as any;
export const forwardRef: ForwardRefSFC = createSfc(true);

sfc.forwardRef = forwardRef;
sfc.createOptions = createOptions;
