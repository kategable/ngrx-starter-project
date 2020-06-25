import { GlobalState } from './user.reducer';
import { createSelector } from '@ngrx/store';

export const selectName = (state: GlobalState) => state.name;
