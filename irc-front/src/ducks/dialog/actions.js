// @flow
import type { FluxActionType } from 'ducks/stateType.js';

export type OpenDialogType = { type: 'DIALOG/OPEN_DIALOG', identifier: string };
export type CloseDialogType = { type: 'DIALOG/CLOSE_DIALOG', identifier: string };

export const openDialog = (identifier: string): FluxActionType => ({
  type: 'DIALOG/OPEN_DIALOG',
  identifier
});

export const closeDialog = (identifier: string): FluxActionType => ({
  type: 'DIALOG/CLOSE_DIALOG',
  identifier
});
