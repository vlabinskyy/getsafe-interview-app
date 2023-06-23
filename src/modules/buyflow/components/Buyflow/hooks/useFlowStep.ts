import { useState } from 'react';
import { BuyflowStepType } from '../../../interfaces';

interface UseFlowStepParams {
  defaultStep: BuyflowStepType;
  steps: Array<BuyflowStepType>;
}

export function useFlowStep({ defaultStep, steps }: UseFlowStepParams) {
  const [currentStep, setStep] = useState<BuyflowStepType>(defaultStep);
  console.log(currentStep, 'currentStep');

  const isLastStep = () => {
    console.log(steps.indexOf(currentStep) === steps.length - 1, 'isLastStep');
    return steps.indexOf(currentStep) === steps.length - 1;
  };

  const isFirstStep = () => {
    return getStepIndex(currentStep) === 0;
  };

  const getStepIndex = (step: BuyflowStepType) => {
    return steps.indexOf(step);
  };

  const navigateToNextStep = () => {
    if (isLastStep()) return currentStep;

    setStep(steps[getStepIndex(currentStep) + 1]);
  };

  const navigateToPrevStep = () => {
    if (isFirstStep()) return currentStep;

    setStep(steps[getStepIndex(currentStep) - 1]);
  };

  return {
    currentStep,
    navigateToNextStep,
    navigateToPrevStep,
    isFirstStep,
    isLastStep,
    setStep,
  };
}
