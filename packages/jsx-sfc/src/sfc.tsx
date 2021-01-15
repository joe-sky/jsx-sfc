import React, { forwardRef as forwardRefReact, Fragment, ReactElement } from 'react';
import { SFC, ForwardRefSFC, FuncMap } from './defineComponent';
import { Template, isTemplate } from './template';
import { getFuncParams, emptyObjs, withOrigin, Func, Obj } from './utils';

const COMPILED_SIGN = '__cs';

export function createFuncResults(funcMaps: FuncMap[], isRuntime?: boolean) {
  const ret: Obj = {};
  let template: Func;

  funcMaps.forEach(funcMap => {
    Object.keys(funcMap).forEach(key => {
      const func = funcMap[key];
      if (func == null) {
        return;
      }

      if (key === 'template') {
        template = func;
      } else {
        ret[key === 'style' ? 'styles' : key] = func();
      }
    });
  });

  if (template) {
    const paramsCount = getFuncParams(template).length;
    ret.template =
      paramsCount > 1
        ? (data?: Template.Data) => {
            const jsxFragment: ReactElement = template({ data, ...ret }, ...emptyObjs(paramsCount - 1));
            if (jsxFragment?.type !== Fragment) {
              throw new TypeError('The return of template with multiple arguments must be React.Fragment type.');
            }

            const tmplFcs: ReactElement | ReactElement[] = jsxFragment.props.children;
            if (!Array.isArray(tmplFcs)) {
              throw new RangeError('Must be at least 2 Template elements.');
            }

            let mainTmplFn: Template.Func['template'];
            tmplFcs.forEach(item => {
              if (isTemplate(item.type)) {
                const { name, children } = item.props;
                if (name) {
                  name.template = children;
                } else {
                  mainTmplFn = children;
                }
              }
            });

            return mainTmplFn();
          }
        : (data?: Template.Data) => template({ data, ...ret });
  }

  if (!isRuntime) {
    ret[COMPILED_SIGN] = true;
  }

  return ret;
}

interface SFCOptions {
  template?: Func;
  Component?: Func;
  style?: Func;
}

function createSfc(isForwardRef?: boolean) {
  function defineSfc(options: SFCOptions, extensions: Obj = {}) {
    if (extensions[COMPILED_SIGN]) {
      delete extensions[COMPILED_SIGN];
      const Component = options as Func;
      const component = !isForwardRef ? Component : forwardRefReact(Component);

      return Object.assign(withOrigin(component), extensions);
    } else {
      if (typeof options === 'function') {
        options = { Component: options as Func };
      }
      const { template, style, Component } = options;
      const funcResults = createFuncResults([{ template, style }, extensions], true);

      let SeparateFunctional: Func;
      if (!isForwardRef) {
        const InnerComponent: React.FC = Component;
        SeparateFunctional = innerProps => {
          return <InnerComponent {...innerProps} {...funcResults} />;
        };
      } else {
        const InnerComponentWithRef = forwardRefReact(Component);
        SeparateFunctional = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} {...funcResults} ref={ref} />;
        });
      }

      return Object.assign(withOrigin(SeparateFunctional), funcResults);
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

export const sfc: SFC = createSfc();
export const forwardRef: ForwardRefSFC = createSfc(true);

sfc.forwardRef = forwardRef;
sfc.createFuncResults = createFuncResults;
