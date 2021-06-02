import { VNodeChild, VNodeArrayChildren } from 'vue';
import { Func } from '../shared';

export type JSXElements = VNodeChild;

export type VNodeArrayChildrenWithDefault = VNodeArrayChildren & { default: Func };

export * from '../shared';
