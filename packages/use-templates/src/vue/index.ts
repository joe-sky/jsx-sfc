import { Fragment, VNode } from 'vue';
import { Template, isTemplate } from './template';
import { noop, getFuncParams, emptyObjs, JSXElements, VNodeArrayChildrenWithDefault } from './utils';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export type DefineTemplates = (...tmpls: Template.Render[]) => JSXElements;

export default function useTemplates(defineTemplates: DefineTemplates) {
  const paramsCount = getFuncParams(defineTemplates).length;

  const jsxFragment = defineTemplates(...(emptyObjs(paramsCount) as Template.Render[])) as VNode;
  if (!IS_PRODUCTION && jsxFragment?.type !== Fragment) {
    throw new TypeError('The return of template with multiple arguments must be Fragment type.');
  }

  const tmplFcs = jsxFragment.children as VNode[];
  if (!IS_PRODUCTION && !Array.isArray(tmplFcs)) {
    throw new RangeError('Must be at least 2 Template elements.');
  }

  let mainTemplate = noop as Template.Render['render'];
  tmplFcs.forEach(item => {
    if (item) {
      if (IS_PRODUCTION || isTemplate(item.type)) {
        const renderFunc = (item.children as VNodeArrayChildrenWithDefault).default;
        if (item.props?.name) {
          item.props.name.render = renderFunc;
        } else {
          mainTemplate = renderFunc;
        }
      }
    }
  });

  return mainTemplate;
}

export * from './template';
