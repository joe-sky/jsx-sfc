import React, { forwardRef as forwardRefReact, ForwardRefExoticComponent } from 'react';
import { SFC, SFCInnerProps, ForwardRefSFC, FuncMap } from './defineComponent';
import { Template, isTemplate } from './template';

function funcReturnMap(extensions: FuncMap) {
  const ret = {};
  Object.keys(extensions).forEach(key => {
    ret[key] = extensions[key]();
  });

  return ret;
}

function createSfc(isForwardRef?: boolean) {
  return (displayName?: string) => {
    return (options, extensions = {}) => {
      const { template, templates, style, Component } = options;
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
        const InnerComponent: React.FC<SFCInnerProps> = Component;
        SeparateFunctional = innerProps => {
          return <InnerComponent {...innerProps} template={tmplFn} {...stylesAndExtensions} />;
        };
      } else {
        const InnerComponentWithRef: ForwardRefExoticComponent<SFCInnerProps> = forwardRefReact(Component);
        SeparateFunctional = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} template={tmplFn} ref={ref} {...stylesAndExtensions} />;
        });
      }
      if (displayName != null) {
        SeparateFunctional.displayName = displayName;
      }

      return SeparateFunctional as any;
    };
  };
}

export const sfc: SFC = createSfc();

export const forwardRef: ForwardRefSFC = createSfc(true);

export const component = sfc();

sfc.forwardRef = forwardRef;
sfc.component = component;
