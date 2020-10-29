import React from 'react';
import { SfcInnerProps, DefineComponent } from './defineComponent';
import { __TEMPLATE__ } from './template';

export type SFC = <P = {}>(displayName?: string) => DefineComponent<P>;

export const sfc: SFC = (displayName?: string) => {
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
    const InnerComponent: React.FC<SfcInnerProps> = Component as any;
    const styles = style ? style() : stylesProp;
    const components = componentsProp?.(styles);
    const options = { styles, components } as any;

    const tmplFn = templates
      ? data => {
          const tmpls = templates(
            data,
            options,
            ...(Object.keys(Array.apply(null, { length: 20 })).map(i => ({
              main: i === '0'
            })) as any)
          );

          let children = tmpls.props.children;
          if (!Array.isArray(children)) {
            children = [children];
          }

          let mainTmplFn;
          children.forEach((item, index) => {
            if (item.main) {
              mainTmplFn = item.template;
            }
          });

          return mainTmplFn();
        }
      : data => template(data, options);

    const SeparateFunctional = innerProps => {
      return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...options} />;
    };

    if (displayName != null) {
      SeparateFunctional.displayName = displayName;
    }
    return SeparateFunctional;
  };
};
