import { createReducer, on, Action, ActionReducer, MetaReducer } from '@ngrx/store';
import * as RootActions from './user.actions'; 

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug];

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

export const rootReducer = createReducer(
  initialState,
  on(RootActions.updateUserName, (state: GlobalState, { user }) =>  ({ user, loaded: true  }) )
);
// export const reducer = createReducer(
//   initialState,
//   // Even thought the `state` is unused, it helps infer the return type
//   on(LayoutActions.closeSidenav, (state) => ({ showSidenav: false })),
//   on(LayoutActions.openSidenav, (state) => ({ showSidenav: true })),
//   on(AuthActions.logoutConfirmation, (state) => ({ showSidenav: false }))
// );

export function reducer(state: GlobalState | undefined, action: Action) {
  return rootReducer(state, action);
}

