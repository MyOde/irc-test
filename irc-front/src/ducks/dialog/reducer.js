// @flow
import type { FluxActionType, DialogReducerType, DialogMetaType } from 'ducks/stateType.js';
/* import { OPEN_DIALOG, CLOSE_DIALOG } from 'ducks/dialog/types.js'; */

const defaultState = [];

const reducer = (
  state: DialogReducerType = defaultState,
  action: FluxActionType
): DialogReducerType => {
  switch(action.type) {
    case 'DIALOG/OPEN_DIALOG': {
      const identifier = action.identifier;
      return [...state, { identifier }];
    }
    case 'DIALOG/CLOSE_DIALOG': {
      const closeIdentifier = action.identifier;
      const newState = state.filter(
        (element: DialogMetaType): DialogMetaType =>
          element.identifier !== closeIdentifier
      );
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
