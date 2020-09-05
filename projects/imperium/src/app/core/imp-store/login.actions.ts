import { createAction, props } from '@ngrx/store';

export const loginName = createAction('[Login Component] Login name', props<{ name: string }>());
