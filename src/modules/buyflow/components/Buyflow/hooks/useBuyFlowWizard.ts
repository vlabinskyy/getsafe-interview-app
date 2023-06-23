import { useCallback, useMemo, useState } from 'react';
import { BuyflowStepType } from '../../../interfaces';
import { BuyflowWizardData } from '../interfaces';

interface UseFlowStepParams {
  defaultStep: BuyflowStepType;
  steps: Array<BuyflowStepType>;
}

export function useBuyFlowWizard({
  defaultStep,
  steps,
}: UseFlowStepParams): BuyflowWizardData {
  const [currentStep, setStep] = useState<BuyflowStepType>(defaultStep);

  const getStepIndex = useCallback(
    (step: BuyflowStepType) => {
      return steps.indexOf(step);
    },
    [steps]
  );

  const isFirstStep = useMemo(
    () => getStepIndex(currentStep) === 0,
    [currentStep, getStepIndex]
  );

  const isLastStep = useMemo(
    () => steps.indexOf(currentStep) === steps.length - 1,
    [currentStep, steps]
  );

  const navigateToNextStep = useCallback(() => {
    if (isLastStep) return;

    setStep(steps[getStepIndex(currentStep) + 1]);
  }, [currentStep, getStepIndex, isLastStep, steps]);

  const navigateToPrevStep = useCallback(() => {
    if (isFirstStep) return;

    setStep(steps[getStepIndex(currentStep) - 1]);
  }, [currentStep, getStepIndex, isFirstStep, steps]);

  return {
    currentStep,
    navigateToNextStep,
    navigateToPrevStep,
    isFirstStep,
    isLastStep,
  };
}
