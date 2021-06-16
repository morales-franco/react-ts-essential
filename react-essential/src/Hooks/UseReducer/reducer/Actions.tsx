export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const ADD_USER = 'add_user';
export const UPDATE_USER = 'update_user';
export const REMOVE_USER = 'remove_user';

export type Actions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof addUser>
  | ReturnType<typeof updateUser>
  | ReturnType<typeof removeUser>;

export const increment = (value: number) =>
  ({
    type: INCREMENT,
    payload: {
      value: value,
    },
  } as const);

export const decrement = (value: number) =>
  ({
    type: DECREMENT,
    payload: {
      value: value,
    },
  } as const);

export const addUser = (userId: string, operation: 'create' | 'modify') =>
  ({
    type: ADD_USER,
    payload: {
      userId: userId,
      operation: operation,
    },
  } as const);

export const updateUser = (userId: string, operation: 'create' | 'modify') =>
  ({
    type: UPDATE_USER,
    payload: {
      userId: userId,
      operation: operation,
    },
  } as const);

export const removeUser = (userId: string) =>
  ({
    type: REMOVE_USER,
    payload: {
      userId: userId,
    },
  } as const);
