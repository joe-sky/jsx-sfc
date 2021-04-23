import { Fragment, useMemo, ReactElement } from 'react';
import { Template, isTemplate } from './template';
import { noop, getFuncParams, emptyObjs, JSXElements } from './utils';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export type DefineTemplates = (...tmpls: Template.Func[]) => JSXElements;

export default function useTemplates(defineTemplates: DefineTemplates) {
  const paramsCount = useMemo(() => getFuncParams(defineTemplates).length, []);

  const jsxFragment = defineTemplates(...(emptyObjs(paramsCount) as Template.Func[])) as ReactElement;
  if (!IS_PRODUCTION && jsxFragment?.type !== Fragment) {
    throw new TypeError('The return of template with multiple arguments must be React.Fragment type.');
  }

  const tmplFcs: ReactElement<{ name?: Template.Func; children: Template.Func['template'] }>[] =
    jsxFragment.props.children;
  if (!IS_PRODUCTION && !Array.isArray(tmplFcs)) {
    throw new RangeError('Must be at least 2 Template elements.');
  }

  let mainTemplate = noop as Template.Func['template'];
  tmplFcs.forEach(item => {
    if (IS_PRODUCTION || (item && isTemplate(item.type))) {
      const { name, children } = item.props;
      if (name) {
        name.template = children;
      } else {
        mainTemplate = children;
      }
    }
  });

  return mainTemplate();
}

export * from './template';
