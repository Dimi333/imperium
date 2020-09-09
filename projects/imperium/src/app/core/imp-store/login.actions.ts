import { createAction, props } from '@ngrx/store';

export const loginName = createAction('[Login Component] Login starts', props<{ name: string }>());
export const loginCreate = createAction('[Login Component] Login create', props<{ name: string }>());
export const loginSuccess = createAction('[Login Component] Login success', props<{ name: string }>());
