import { BuyflowSteps, PRODUCTS_FLOWS } from '../../../constants';
import { useFlowStep } from './useFlowStep';
import { BuyflowProps } from '../interfaces';

export function useBuyFlow(params: BuyflowProps) {
  const { productId } = params;
  const flowStepData = useFlowStep({
    defaultStep: BuyflowSteps.EMAIL,
    steps: PRODUCTS_FLOWS[productId],
  });

  return {
    ...flowStepData,
  };
}
