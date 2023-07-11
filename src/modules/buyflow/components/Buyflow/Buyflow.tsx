import React from 'react';

import { BuyflowProps } from './interfaces';
import { useBuyFlow } from './hooks';
import { BUYFLOW_STEP_UI_MAP } from '../../constants';
import { BuyflowWizardContext } from './constants';

export const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { wizardData } = useBuyFlow(props);

  const { currentStep } = wizardData;

  const renderStep = () => {
    const Component = BUYFLOW_STEP_UI_MAP[currentStep];
    return <Component />;
  };

  return (
    <BuyflowWizardContext.Provider value={wizardData}>
      {renderStep()}
    </BuyflowWizardContext.Provider>
  );
};
