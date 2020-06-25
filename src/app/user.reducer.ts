import { createReducer, on, Action } from '@ngrx/store';
import { updateUserName } from './user.actions';
 

 export interface GlobalState {
  name: string
}

export const initialState: GlobalState = {
  name: 'blank', 
};

const _userReducer = createReducer(initialState,
  on(updateUserName, (state, {name}) => ({...state,  name: name })),
  //on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
); 
 
export function userReducer(state:GlobalState, action:Action) {
  return _userReducer(state, action);
}
 