import { ReactElement } from 'react';
import { Func } from 'use-templates/src/share';

export type Obj = Record<string, unknown>;

export type FuncMap = Record<string, Func | Obj | undefined>;

export type JSXElements = ReactElement<any, any> | null;

export function isFunc(value: any): value is Func {
  return typeof value === 'function';
}

export function withOrigin(component: Func) {
  return Object.defineProperty(component, 'Component', {
    get() {
      return component;
    },
    enumerable: true,
    configurable: true
  });
}

export * from 'use-templates/src/share';
