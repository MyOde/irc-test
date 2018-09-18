// @flow
import type { StateType, HomeReducerType, ChatHeaderType } from 'ducks/stateType.js';

const homeReducer = (state: StateType): HomeReducerType => state && state.home;

export const roomHeaders = (state: StateType): Array<ChatHeaderType> => {
  const reducer = homeReducer(state);
  return reducer && reducer.rooms;
};
