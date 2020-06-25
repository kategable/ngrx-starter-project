import { GlobalState } from './root.reducer';

export const selectName = (state: GlobalState) => state.name;
export const selectLoading = (state: GlobalState) => !state.loaded;
