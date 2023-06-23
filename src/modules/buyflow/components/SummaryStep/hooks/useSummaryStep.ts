import { useStateMachine } from 'little-state-machine';
import { updateFormValues } from '../../../actions';
import { FieldKeysType, fieldLabelMap } from '../../../constants';
import { useMemo } from 'react';
import { routes } from '../../../../../constants';
import { useParams } from 'react-router-dom';

export function useSummaryStep() {
  const { state } = useStateMachine({ updateFormValues });
  const { productId } = useParams<{ productId: string }>();

  const summaryValues = useMemo(
    () =>
      Object.entries(state.buyflow).map(([key, value]) => {
        return {
          key: fieldLabelMap[key as FieldKeysType]?.id,
          label: fieldLabelMap[key as FieldKeysType]?.label,
          value: value,
        };
      }),
    [state.buyflow]
  );

  const purchaseRoute = useMemo(
    () => `${routes.PURCHASED}?productId=${productId}`,
    [productId]
  );

  return {
    summaryValues,
    purchaseRoute,
  };
}
