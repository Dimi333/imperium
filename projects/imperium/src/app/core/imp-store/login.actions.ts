import { createAction, props } from '@ngrx/store';
import { Player } from './store';

export const loginStarts = createAction('[Login Component] Login starts', props<{ login: Player }>());
export const routerLoadCharacter = createAction('[Router] Load character');
export const loginCreate = createAction('[Login Component] Login create', props<{ login: Player }>());
export const loginSuccess = createAction('[Login Component] Login success', props<{ login: Player }>());
export const loginUnsuccess = createAction('[Login Component] Login unsuccess', props<{ login: Player }>());
export const loginLoad = createAction('[Login Component] Login load');
