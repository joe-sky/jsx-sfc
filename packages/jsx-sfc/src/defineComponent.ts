import React, { PropsWithChildren, Ref, RefAttributes, ReactElement } from 'react';
import { Template } from './template';

type NoRef = 'noRef';

export type JSXElements = ReactElement<any, any> | null;

export type SFCProps<T = {}, EX = {}> = PropsWithChildren<T> & {
  template: <D extends Template.Data>(data: D) => D;
} & EX;

export interface SFCInnerProps {
  template: (...args: any) => any;
  style: Record<string, any>;
}

export type DefineComponent<T, P = {}> = {
  <D extends Template.Data, S, SP = { style?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    Component: T extends NoRef
      ? (props: SFCProps<P, SP>, context?: any) => D
      : (props: SFCProps<P, SP>, ref?: Ref<T>) => D;
    template: <U extends D>(args: { data: U } & SP) => JSXElements;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;

  <D, S, SP = { style?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    Component: T extends NoRef
      ? (props: SFCProps<P, SP>, context?: any) => D
      : (props: SFCProps<P, SP>, ref?: Ref<T>) => D;
    templates: <U extends D>(args: { data: U } & SP, ...tmpls: Template.Func[]) => JSX.Element;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;

  <S, SP = { style?: S }, RP = P extends {} ? P : {}>(options: {
    style?: () => S;
    Component: T extends NoRef
      ? (props: SFCProps<P, SP>, context?: any) => JSXElements
      : (props: SFCProps<P, SP>, ref?: Ref<T>) => JSXElements;
  }): T extends NoRef ? React.FC<RP> : React.ForwardRefExoticComponent<RP & RefAttributes<T>>;
};

export type ForwardRefSFC = <T, P = {}>(displayName?: string) => DefineComponent<T, P>;

export interface SFC {
  <P = {}>(displayName?: string): DefineComponent<NoRef, P>;
  forwardRef?: ForwardRefSFC;
  component?: DefineComponent<NoRef, {}>;
}
