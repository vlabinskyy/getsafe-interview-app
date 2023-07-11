import { BuyflowSteps, ProductIds } from './constants';

export type BuyflowStepType = (typeof BuyflowSteps)[keyof typeof BuyflowSteps];

export type ProductType = (typeof ProductIds)[keyof typeof ProductIds];
