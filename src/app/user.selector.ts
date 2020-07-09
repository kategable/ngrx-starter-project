import { GlobalState } from './root.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const appState = createFeatureSelector<GlobalState>('app');

export const selectName = createSelector(
    appState,
    (state) => state.user
);
export const selectLoaded = createSelector(
    appState,
    (state) => state.loaded
);
