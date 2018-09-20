// @flow
export type ActOnUserNameType = {
  type: 'USER/PUT_USER_NAME',
  name: string
};

export const actOnUserName = (name: string): ActOnUserNameType => ({
  type: 'USER/PUT_USER_NAME',
  name
});
