import { createAction, props } from '@ngrx/store';
import { Player } from './store';

export const loginName = createAction('[Login Component] Login starts', props<{ login: Player }>());
export const loginCreate = createAction('[Login Component] Login create', props<{ login: Player }>());
export const loginSuccess = createAction('[Login Component] Login success', props<{ login: Player }>());
