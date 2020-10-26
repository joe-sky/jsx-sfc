import React from 'react';
import { SfcInnerProps, ComponentCreator } from './interface';

export type SFC = <P = {}>(displayName?: string) => ComponentCreator<P>;

export const sfc: SFC = (displayName?: string) => {
  return props => {
    const { template, templates, style, styles: stylesProp, Component, ...otherProps } = props;
    const InnerComponent: React.FC<SfcInnerProps> = Component as any;
    const styles = style ? style() : stylesProp;
    const tmplFn = templates
      ? () => data => {
          const tmpls = templates(
            data,
            { styles } as any,
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
      : () => data => template(data, { styles } as any);

    const SeparateFunctional = innerProps => {
      return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...{ styles }} />;
    };

    return SeparateFunctional;
  };
};
