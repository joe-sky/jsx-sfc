import { Fragment, useMemo, ReactElement } from 'react';
import { Template, isTemplate } from './template';
import { noop, getFuncParams, emptyObjs, JSXElements } from './utils';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export type DefineTemplates = (...tmpls: Template.Render[]) => JSXElements;

export default function useTemplates(defineTemplates: DefineTemplates) {
  const paramsCount = useMemo(() => getFuncParams(defineTemplates).length, []);

  const jsxFragment = defineTemplates(...(emptyObjs(paramsCount) as Template.Render[])) as ReactElement;
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
          name.render = children;
        } else {
          mainTemplate = children;
        }
      }
    }
  });

  return mainTemplate();
}

export * from './template';
