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

function createSfc(isForwardRef?: boolean) {
  function defineSfc(options, extensions = {}) {
    let ActualComponent;
    const param2IsArray = Array.isArray(extensions);
    if (param2IsArray) {
      ActualComponent = options;
      options = extensions[0];
      extensions = extensions?.[1];
    }

    const { template, templates, style, Component } = options;
    if (!param2IsArray) {
      ActualComponent = Component;
    }

    const stylesAndExtensions = { styles: style?.(), ...funcReturnMap(extensions) };

    const tmplFn = templates
      ? data => {
          const tmpls = templates(
            { data, ...stylesAndExtensions },
            ...(Object.keys(Array.apply(null, { length: 20 })).map(i => ({
              main: i === '0'
            })) as any)
          );

          let tmplFcs = tmpls.props.children;
          if (!Array.isArray(tmplFcs)) {
            tmplFcs = [tmplFcs];
          }

          let mainTmplFn: Template.Func['template'];
          tmplFcs.forEach(item => {
            if (isTemplate(item.type)) {
              const { name, children } = item.props;
              name.template = children;

              if (name.main) {
                mainTmplFn = children;
              }
            }
          });

          return mainTmplFn();
        }
      : data => template({ data, ...stylesAndExtensions });

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

    return SeparateFunctional as any;
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
