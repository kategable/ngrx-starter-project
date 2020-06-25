import { GlobalState } from './root.reducer';

export const selectName = (state: GlobalState) => state.user;
export const selectLoaded = (state: GlobalState) => state.loaded;
