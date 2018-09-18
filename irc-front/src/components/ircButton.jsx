// @flow
import type { Element } from 'react';
import React from 'react';

type IrcButtonPropsType = {
  // eslint-disable-next-line flowtype/no-weak-types
  action: (...Iterable<any>) => void,
  // eslint-disable-next-line flowtype/no-weak-types
  actionArgs: Array<Iterable<any>>,
  children: string
};

const IrcButton = ({ action, actionArgs, children }: IrcButtonPropsType): Element<'button'> => {
  const runAction = (): void => action(...actionArgs);
  return (
    <button onClick={runAction}>
      {children}
    </button>
  )
}

export default IrcButton;
