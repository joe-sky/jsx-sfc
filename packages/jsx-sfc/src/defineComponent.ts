import React, { PropsWithChildren, Ref, RefAttributes, ReactElement } from 'react';
import { Template } from './template';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D extends Template.Data>(data: D) => D;
} & EX;

export interface SFCInnerProps {
  template: (...args: any) => any;
  styles: Record<string, any>;
  components: Record<string, any>;
}

export type DefineComponent<T, P = {}> = {
  <D extends Template.Data, S, C, SP = { styles?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    styles?: S;
    components?: (styles: S) => C;
    Component: T extends NoRef
      ? <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, context?: any) => D
      : <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, ref?: Ref<T>) => D;
    template: <U extends D, UC extends C>(data: U, others?: SP & { components?: UC }) => JSXElements;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;

  <D, S, C, SP = { styles?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    styles?: S;
    components?: (styles: S) => C;
    Component: T extends NoRef
      ? <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, context?: any) => D
      : <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, ref?: Ref<T>) => D;
    templates: <U extends D, UC extends C>(
      data: U,
      others?: SP & { components?: UC },
      ...tmpls: Template.Func[]
    ) => JSX.Element;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;

  <S, C, SP = { styles?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    styles?: S;
    components?: (styles: S) => C;
    Component: T extends NoRef
      ? <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, context?: any) => JSXElements
      : <UC extends C>(props: SFCProps<P, SP & { components?: UC }>, ref?: Ref<T>) => JSXElements;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
};

export type ForwardRefSFC = <T, P = {}>(displayName?: string) => DefineComponent<T, P>;

export interface SFC {
  <P = {}>(displayName?: string): DefineComponent<NoRef, P>;
  forwardRef?: ForwardRefSFC;
  component?: DefineComponent<NoRef, {}>;
}
