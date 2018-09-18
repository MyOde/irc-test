// @flow
import type { DialogMetaType, StateType, DialogReducerType } from 'ducks/stateType.js';

export const getDialogReducer = (
  state: StateType
): DialogReducerType =>
  state && state.dialog;

export const getActiveDialogIdentifiers = (
  state: StateType
): Array<string> => {
  const reducer = getDialogReducer(state);
  const identifiers = reducer.map(({ identifier }: DialogMetaType): string => identifier)
  return identifiers
}
