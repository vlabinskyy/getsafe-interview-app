import React from 'react';

import { BuyflowProps } from './interfaces';
import { useBuyFlow } from './hooks';
import { BUYFLOW_STEP_UI_MAP } from '../../constants';

export const Buyflow: React.FC<BuyflowProps> = (props) => {
  const {
    currentStep,
    isFirstStep,
    isLastStep,
    navigateToNextStep,
    navigateToPrevStep,
  } = useBuyFlow(props);

  const renderStep = (props: BuyflowProps) => {
    const Component = BUYFLOW_STEP_UI_MAP[currentStep];
    return <Component {...props} />;
  };

  const renderNavigationButtons = () => {
    return (
      <>
        {!isFirstStep() && <button onClick={navigateToPrevStep}>Prev</button>}
        {!isLastStep() && <button onClick={navigateToNextStep}>Next</button>}
      </>
    );
  };

  return (
    <>
      {renderStep(props)}
      {renderNavigationButtons()}
    </>
  );
};
