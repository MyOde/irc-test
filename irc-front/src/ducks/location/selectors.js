// @flow
import type { StateType, LocationReducerType } from 'ducks/stateType.js';
const locationReducer = (state: StateType): LocationReducerType => state && state.location;
const locationType = (state: StateType): string => {
  const locRed = locationReducer(state);
  return locRed && locRed.type;
};
const locationPayload = (state: StateType): {} => {
  const locRed = locationReducer(state);
  return locRed && locRed.payload;
};

export {
  locationType,
  locationPayload
};
