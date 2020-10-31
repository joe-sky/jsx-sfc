import React, { forwardRef, ForwardRefExoticComponent } from 'react';
import { SfcInnerProps, DefineComponent } from './defineComponent';
import { Template, isTemplate } from './template';

export type SFC = <P = {}>(displayName?: string) => DefineComponent<'noRef', P>;

export type ForwardRefSFC = <T, P = {}>(displayName?: string) => DefineComponent<T, P>;

// export const sfc: ForwardRefSFC = (displayName?: string) => {
//   return props => {
//     const {
//       template,
//       templates,
//       style,
//       styles: stylesProp,
//       Component,
//       components: componentsProp,
//       ...otherProps
//     } = props;
//     const InnerComponent = Component as any;
//     const styles = style ? style() : stylesProp;
//     const components = componentsProp?.(styles);
//     const options = { styles, components } as any;

//     const tmplFn = templates
//       ? data => {
//           const tmpls = templates(
//             data,
//             options,
//             ...(Object.keys(Array.apply(null, { length: 20 })).map(i => ({
//               main: i === '0'
//             })) as any)
//           );

//           let tmplFcs = tmpls.props.children;
//           if (!Array.isArray(tmplFcs)) {
//             tmplFcs = [tmplFcs];
//           }

//           let mainTmplFn: Template.Func['template'];
//           tmplFcs.forEach(item => {
//             if (isTemplate(item.type)) {
//               const { name, children } = item.props;
//               name.template = children;

//               if (name.main) {
//                 mainTmplFn = children;
//               }
//             }
//           });

//           return mainTmplFn();
//         }
//       : data => template(data, options);

//     // const SeparateFunctional = innerProps => {
//     //   return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...options} />;
//     // };

//     const InnerComponentWithRef: ForwardRefExoticComponent<SfcInnerProps> = forwardRef(InnerComponent);
//     const SeparateFunctional = forwardRef((innerProps, ref) => {
//       return <InnerComponentWithRef {...innerProps} {...otherProps} template={tmplFn} {...options} ref={ref} />;
//     });

//     if (displayName != null) {
//       SeparateFunctional.displayName = displayName;
//     }
//     return SeparateFunctional;
//   };
// };

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

    const SeparateFunctional = innerProps => {
      return <InnerComponent {...innerProps} {...otherProps} template={tmplFn} {...options} />;
    };

    if (displayName != null) {
      SeparateFunctional.displayName = displayName;
    }
    return SeparateFunctional;
  };
};
