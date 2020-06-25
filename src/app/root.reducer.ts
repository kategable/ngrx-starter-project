import { createReducer, on, Action } from '@ngrx/store';
import * as RootActions from './user.actions';
 

 export interface GlobalState {
  name: string | undefined, 
  loaded: boolean
}

export const initialState: GlobalState = {
  name: undefined, 
  loaded: false
};

const rootReducer = createReducer(initialState,
  on(RootActions.updateUserName, (state, {name}) => ({...state,  name , loaded: !state.loaded})),
); 
 
export function reducer(state:GlobalState | undefined, action:Action) {
  return rootReducer(state, action);
}
 