import React, { forwardRef as forwardRefReact, ForwardRefExoticComponent } from 'react';
import { SFC, SFCInnerProps, ForwardRefSFC } from './defineComponent';
import { Template, isTemplate } from './template';

function setDisplayName(component, displayName?: string) {
  if (displayName != null) {
    component.displayName = displayName;
  }
}

function createSfc(isForwardRef?: boolean) {
  return (displayName?: string) => {
    return props => {
      const {
        template,
        templates,
        style,
        styles: stylesProp,
        Component,
        components: componentsProp,
        ...otherProps
      } = props;
      const styles = style ? style() : stylesProp;
      const components = componentsProp?.(styles);
      const options = { styles, components };

      const tmplFn = templates
        ? data => {
            const tmpls = templates(
              data,
              options,
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
        : data => template(data, options);

      if (!isForwardRef) {
        const InnerComponent: React.FC<SFCInnerProps> = Component;
        const SeparateFunctional = innerProps => {
          return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...options} />;
        };

        setDisplayName(displayName);
        return SeparateFunctional as any;
      } else {
        const InnerComponentWithRef: ForwardRefExoticComponent<SFCInnerProps> = forwardRefReact(Component);
        const SeparateFunctional = forwardRefReact((innerProps, ref) => {
          return <InnerComponentWithRef {...innerProps} {...otherProps} template={tmplFn} {...options} ref={ref} />;
        });

        setDisplayName(displayName);
        return SeparateFunctional as any;
      }
    };
  };
}

export const sfc: SFC = createSfc();

export const forwardRef: ForwardRefSFC = createSfc(true);

export const component = sfc();

sfc.forwardRef = forwardRef;
sfc.component = component;
