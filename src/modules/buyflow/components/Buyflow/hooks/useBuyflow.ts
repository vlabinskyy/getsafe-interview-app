import { BuyflowSteps, PRODUCTS_FLOWS } from '../../../constants';
import { useBuyFlowWizard } from './useBuyFlowWizard';
import { BuyflowProps } from '../interfaces';
import { useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { clearFormValues } from '../../../actions';

export function useBuyFlow(params: BuyflowProps) {
  const { productId } = params;
  const { actions } = useStateMachine({ clearFormValues });

  useEffect(() => {
    actions.clearFormValues();
  }, [actions]);

  const wizardData = useBuyFlowWizard({
    defaultStep: BuyflowSteps.EMAIL,
    steps: PRODUCTS_FLOWS[productId],
  });

  return {
    wizardData,
  };
}
