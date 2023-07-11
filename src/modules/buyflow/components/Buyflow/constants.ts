import { createContext } from 'react';
import { BuyflowWizardData } from './interfaces';

export const BuyflowWizardContext = createContext<BuyflowWizardData>({
  currentStep: '',
  isFirstStep: false,
  isLastStep: false,
  navigateToNextStep(): void {},
  navigateToPrevStep(): void {},
});
