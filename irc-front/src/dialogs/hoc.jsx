// @flow
import type { Node } from 'react';
import type { StateType, DispatchFuncType } from 'ducks/stateType.js';
import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { closeDialog } from 'ducks/dialog/actions';
import { getActiveDialogIdentifiers } from 'ducks/dialog/selectors.js';

type PropsType = StatePropsType & DispatchPropsType;

type StatePropsType = {
  activeDialogs: Array<string>
};

type DispatchPropsType = {
  closeDialog: (string) => void
};

const DialogHoc =
  (identifier: string): ((Node) => Node) =>
    (component: Node): Node => {
      const Dialog = ({ activeDialogs, closeDialog }: PropsType): Node => {
        const last = activeDialogs[activeDialogs.length - 1];
        const closeFunc = (): void => closeDialog(identifier);
        if (last === identifier) {
          return (
            <Modal
              isOpen={true}
            >
              <div>
                <button onClick={closeFunc}>
                  .X.
                </button>
              </div>
              <div>
                {component}
              </div>
            </Modal>
          );
        }

        return null;
      }

      const mapState = (state: StateType): StatePropsType => ({
        activeDialogs: getActiveDialogIdentifiers(state)
      });
      const mapDispatch = (dispatch: DispatchFuncType): DispatchPropsType => ({
        closeDialog: (identifier: string): void => dispatch(closeDialog(identifier))
      });

      return connect(mapState, mapDispatch)(Dialog);
    };

export default DialogHoc;
