import { forwardRef as forwardRefReact, Fragment, ReactElement } from 'react';
import { SFC, ForwardRefSFC, SFCOptions, SFCExtensions } from './defineComponent';
import { Template, isTemplate } from './template';
import { isFunc, noop, getFuncParams, emptyObjs, withOrigin, Func, Obj, FuncMap } from './utils';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export function createOptions(options: FuncMap, extensions?: SFCExtensions) {
  const ret: Obj = {};
  let render: Func = noop;

  Object.keys(options).forEach(key => {
    const item = options[key];
    if (key === 'template' || key === 'render') {
      render = item as Func;
    } else if (key === 'styles') {
      ret[key] = isFunc(item) ? item() : item;
    } else if (key === 'options' || key === 'static') {
      const opts = isFunc(item) ? item() : item;
      opts && Object.assign(ret, opts);
    }
  });

  const ex = isFunc(extensions) ? extensions() : extensions;
  ex && Object.assign(ret, ex);

  if (render) {
    const paramsCount = getFuncParams(render).length;
    ret.render =
      paramsCount > 1
        ? (data?: Obj) => {
            const jsxFragment: ReactElement = render(
              { data, props: data?.props, ...ret },
              ...emptyObjs(paramsCount - 1)
            );
            if (!IS_PRODUCTION && jsxFragment?.type !== Fragment) {
              throw new TypeError('The return of template with multiple arguments must be React.Fragment type.');
            }

            const tmplFcs: ReactElement<{ name?: Template.Render; children: Template.Render['render'] }>[] =
              jsxFragment.props.children;
            if (!IS_PRODUCTION && !Array.isArray(tmplFcs)) {
              throw new RangeError('Must be at least 2 Template elements.');
            }

            let mainTemplate = noop as Template.Render['render'];
            tmplFcs.forEach(item => {
              if (item) {
                if (IS_PRODUCTION || isTemplate(item.type)) {
                  const { name, children } = item.props;
                  if (name) {
                    name.template = name.render = children;
                  } else {
                    mainTemplate = children;
                  }
                }
              }
            });

            return mainTemplate();
          }
        : (data?: Obj) => render({ data, props: data?.props, ...ret });
  }

  return ret;
}

function createSfc(isForwardRef?: boolean) {
  function defineSfc(component: Func, options: SFCOptions) {
    const Component = !isForwardRef ? component : forwardRefReact(component);
    const opts: Obj = {};

    Object.keys(options).forEach(key => {
      if (key === 'render') {
        opts.template = opts.Render = options[key];
      } else {
        opts[key] = options[key as keyof SFCOptions];
      }
    });

    return Object.assign(withOrigin(Component), opts);
  }

  return (component: Func, options: SFCOptions) => {
    if (options) {
      return defineSfc(component, options);
    } else {
      return defineSfc;
    }
  };
}

export const sfc: SFC = createSfc() as any;
export const forwardRef: ForwardRefSFC = createSfc(true) as any;

sfc.forwardRef = forwardRef;
sfc.createOptions = createOptions;
