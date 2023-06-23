import { AgeStep, EmailStep, IdentityStep, SummaryStep } from './components';
import { BuyflowStepType } from './interfaces';

export const BuyflowSteps = {
  EMAIL: 'email',
  AGE: 'age',
  IDENTITY: 'identity',
  SUMMARY: 'summary',
};

export const BUYFLOW_STEP_UI_MAP = {
  [BuyflowSteps.EMAIL]: EmailStep,
  [BuyflowSteps.AGE]: AgeStep,
  [BuyflowSteps.IDENTITY]: IdentityStep,
  [BuyflowSteps.SUMMARY]: SummaryStep,
};

// I would avoid using enums since it is not a native language construct
// plus it is being transpiled into a horrible code pieces and leads to a plenty of bugs
export const ProductIds = {
  developerInsurance: 'dev_ins',
  designerInsurance: 'des_ins',
};

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.developerInsurance]: 'Developer Insurance',
  [ProductIds.designerInsurance]: 'Designer Insurance',
};

export const PRODUCTS_FLOWS: Record<string, Array<BuyflowStepType>> = {
  [ProductIds.developerInsurance]: [
    BuyflowSteps.EMAIL,
    BuyflowSteps.AGE,
    BuyflowSteps.SUMMARY,
  ],
  [ProductIds.designerInsurance]: [
    BuyflowSteps.EMAIL,
    BuyflowSteps.AGE,
    BuyflowSteps.IDENTITY,
    BuyflowSteps.SUMMARY,
  ],
};
export type FieldKeysType = 'email' | 'age' | 'firstName' | 'lastName';
export const fieldLabelMap: Record<
  FieldKeysType,
  { id: string; label: string }
> = {
  email: {
    id: 'email',
    label: 'Email',
  },
  age: {
    id: 'age',
    label: 'Age',
  },
  firstName: {
    id: 'firstName',
    label: 'First Name',
  },
  lastName: {
    id: 'lastName',
    label: 'Last Name',
  },
};
