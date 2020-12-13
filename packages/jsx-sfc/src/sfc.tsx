import React, { forwardRef as forwardRefReact, ForwardRefExoticComponent } from 'react';
import { SFC, SFCInnerProps, ForwardRefSFC, FuncMap } from './defineComponent';
import { Template, isTemplate } from './template';

function funcReturnMap(extensions: FuncMap) {
  const ret = {};
  extensions &&
    Object.keys(extensions).forEach(key => {
      ret[key] = extensions[key]();
    });

  return ret;
}

// Reference by https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

function funcParams(func: Function) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES) || [];
}

function createSfc(isForwardRef?: boolean) {
  function defineSfc(options, extensions = {}) {
    let ActualComponent;
    const param2IsArray = Array.isArray(extensions);
    if (param2IsArray) {
      ActualComponent = options;
      options = extensions[0];
      extensions = extensions?.[1];
    }

    const { template, style, Component } = options;
    if (!param2IsArray) {
      ActualComponent = Component;
    }

    const stylesAndExtensions = { styles: style?.(), ...funcReturnMap(extensions) };

    let tmplFn;
    if (template) {
      const paramsCount = funcParams(template).length;
      if (paramsCount > 1) {
        tmplFn = data => {
          const tmpls = template(
            { data, ...stylesAndExtensions },
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
        };
      } else {
        tmplFn = data => template({ data, ...stylesAndExtensions });
      }
    }

    let SeparateFunctional;
    if (!isForwardRef) {
      const InnerComponent: React.FC<SFCInnerProps> = ActualComponent;
      SeparateFunctional = innerProps => {
        return <InnerComponent {...innerProps} template={tmplFn} {...stylesAndExtensions} />;
      };
    } else {
      const InnerComponentWithRef: ForwardRefExoticComponent<SFCInnerProps> = forwardRefReact(ActualComponent);
      SeparateFunctional = forwardRefReact((innerProps, ref) => {
        return <InnerComponentWithRef {...innerProps} template={tmplFn} ref={ref} {...stylesAndExtensions} />;
      });
    }

    return Object.assign(SeparateFunctional, stylesAndExtensions);
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
