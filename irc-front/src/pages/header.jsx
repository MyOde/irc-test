// @flow
import type { Node } from 'react';
import type { StateType, DispatchFuncType } from 'ducks/stateType.js';
import React from 'react';
import { connect } from 'react-redux';
import { navigateHome } from 'ducks/home/actions.js';
import { getCurrentUserName } from 'ducks/user/selectors.js';

type PropsType = StatePropsType & DispatchPropsType;

type StatePropsType = {
  userName: ?string
};

type DispatchPropsType = {
  dispatchHomeNav: () => void
};

export const Header = ({ userName, dispatchHomeNav }: PropsType): Node => {
  const maybeUserName = userName ? <div>{userName}</div> : null;
  return (
    <div>
      <button onClick={dispatchHomeNav}>Home</button>
      {maybeUserName}
    </div>
  )
};


const mapState = (state: StateType): StatePropsType => ({
  userName: getCurrentUserName(state)
});

const mapDispatch = (dispatch: DispatchFuncType): DispatchPropsType => ({
  dispatchHomeNav: (): void => dispatch(navigateHome)
});

export default connect(mapState, mapDispatch)(Header);
