import React, { forwardRef as forwardRefReact, ForwardRefExoticComponent } from 'react';
import { SFC, SFCInnerProps, ForwardRefSFC } from './defineComponent';
import { Template, isTemplate } from './template';

function createSfc(isForwardRef?: boolean) {
  return (displayName?: string) => {
    return props => {
      const { template, templates, style, Component, ...otherProps } = props;
      const options = { style: style?.() };

      const tmplFn = templates
        ? data => {
            const tmpls = templates(
              { data, ...options },
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
        : data => template({ data, ...options });

      let SeparateFunctional;
      if (!isForwardRef) {
        const InnerComponent: React.FC<SFCInnerProps> = Component;
        SeparateFunctional = innerProps => {
          return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...options} />;
        };
      } else {
        const InnerComponentWithRef: ForwardRefExoticComponent<SFCInnerProps> = forwardRefReact(Component);
        SeparateFunctional = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} {...otherProps} template={tmplFn} {...options} ref={ref} />;
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
