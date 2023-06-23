import React, { useContext } from 'react';
import { BuyflowWizardContext } from '../Buyflow/constants';

export const NavigationButtons = () => {
  const { isFirstStep, isLastStep, navigateToPrevStep } =
    useContext(BuyflowWizardContext);

  return (
    <>
      {!isFirstStep && <button onClick={navigateToPrevStep}>Prev</button>}
      {!isLastStep && <button type="submit">Next</button>}
    </>
  );
};
