import { createReducer, on, Action } from '@ngrx/store';
import * as RootActions from './user.actions';

export interface UserEntity {
  name: string;
}

export interface GlobalState {
  user: UserEntity;
  loaded: boolean;
}

export const initialState: GlobalState = {
  user: null,
  loaded: false,
};

const rootReducer = createReducer(
  initialState,
  on(RootActions.updateUserName, (state, { user }) => ({
    ...state,
     user,
    loaded: true,
  }))
);

export function reducer(state: GlobalState | undefined, action: Action) {
  return rootReducer(state, action);
}
