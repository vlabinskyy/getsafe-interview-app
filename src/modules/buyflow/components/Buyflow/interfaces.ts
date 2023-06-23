import { BuyflowStepType, ProductType } from '../../interfaces';

export interface BuyflowProps {
  productId: ProductType;
}

export interface BuyflowWizardData {
  currentStep: BuyflowStepType;
  navigateToNextStep: () => void;
  navigateToPrevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}
