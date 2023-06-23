import { GlobalState } from 'little-state-machine';

export function updateFormValues(
  state: GlobalState,
  payload: {
    age?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
  }
) {
  return {
    ...state,
    buyflow: {
      ...state.buyflow,
      ...payload,
    },
  };
}

export function clearFormValues(state: GlobalState) {
  return {
    ...state,
    buyflow: {},
  };
}
