import { createAction ,props} from '@ngrx/store';

export const updateUserName = createAction('[App Component] Name Change', 
props<{ name: string }>());