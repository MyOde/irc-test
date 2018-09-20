// @flow
import type { UserReducerType, StateType } from 'ducks/stateType.js';

export const getUserReducer = (state: StateType): UserReducerType => state && state.user;
export const getCurrentUserName = (state: StateType): string => {
  const reducer = getUserReducer(state);
  return reducer && reducer.name;
};
