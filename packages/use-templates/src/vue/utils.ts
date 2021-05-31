import { VNodeChild, VNodeArrayChildren } from 'vue';
import { Func } from '../share';

export type JSXElements = VNodeChild;

export type VNodeArrayChildrenWithDefault = VNodeArrayChildren & { default: Func };

export * from '../share';
