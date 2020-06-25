import { createAction, props } from '@ngrx/store';
import { UserEntity } from './root.reducer';

export const updateUserName = createAction(
  '[App Component] Name Change',
  props<{ user: UserEntity }>()
);
