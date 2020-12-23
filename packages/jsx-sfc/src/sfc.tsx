import React, { forwardRef as forwardRefReact, ForwardRefExoticComponent } from 'react';
import { SFC, ForwardRefSFC, FuncMap } from './defineComponent';
import { Template, isTemplate } from './template';
import { getFuncParams, isFunc } from './utils';

export function createSfcFuncResults(funcMap: FuncMap) {
  const ret: Record<string, any> = {};
  let template: Function;

  funcMap &&
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

  if (template) {
    const paramsCount = getFuncParams(template).length;
    ret.template =
      paramsCount > 1
        ? data => {
            const tmpls = template(
              { data, ...ret },
              ...(Object.keys(Array.apply(null, { length: paramsCount - 1 })).map(() => ({})) as any)
            );

            let tmplFcs = tmpls.props.children;
            if (!Array.isArray(tmplFcs)) {
              tmplFcs = [tmplFcs];
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
        : data => template({ data, ...ret });
  }

  return ret;
}

function createSfc(isForwardRef?: boolean) {
  function defineSfc(options, extensions = {}) {
    if (isFunc(options)) {
      const Component = options;
      return Object.assign(!isForwardRef ? Component : forwardRefReact(Component), extensions);
    } else {
      const { template, style, Component } = options;
      const sfcFuncResults = createSfcFuncResults({ ...{ template, style }, ...extensions });

      let SeparateFunctional;
      if (!isForwardRef) {
        const InnerComponent: React.FC = Component;
        SeparateFunctional = innerProps => {
          return <InnerComponent {...innerProps} {...sfcFuncResults} />;
        };
      } else {
        const InnerComponentWithRef = forwardRefReact(Component);
        SeparateFunctional = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} {...sfcFuncResults} ref={ref} />;
        });
      }

      return Object.assign(SeparateFunctional, sfcFuncResults);
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
