// @flow
import type { Node } from 'react';
import type { DispatchFuncType } from 'ducks/stateType';
import React from 'react';
import { connect } from 'react-redux';
import dialogHoc from './hoc.jsx';
import { CREATE_ROOM_DIALOG, createRoom } from 'ducks/home/actions.js';

type DispatchPropsType = {
  saveNewRoom: (string) => void
};

const CreateRoomDialog = ({ saveNewRoom }: DispatchPropsType): Node => {
  return (
    <div>
      <input type='text' />
      <button onClick={saveNewRoom}>Create</button>
    </div>
  );
};

// TODO This might be breaking everything
const emptyFun = null;
const mapDispatch = (dispatch: DispatchFuncType): DispatchPropsType => ({
  saveNewRoom: (name: string): void => dispatch(createRoom(name))
});

const connected = connect(emptyFun, mapDispatch)(CreateRoomDialog);
export default dialogHoc(CREATE_ROOM_DIALOG)(connected);
