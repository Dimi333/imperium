import { createAction, props } from '@ngrx/store';
import { Player } from './store';

// vytvorenie novej postavy
export const characterCreate = createAction('[New game Component] Character create', props<{ login: Player }>());
export const characterCreated = createAction('[New game Component] Character created', props<{ login: Player }>());

// prihlásenie sa do hry pod svojou postavou - začiatok
export const loginStarts = createAction('[Login Component] Login starts', props<{ login: Player }>());
export const loginSuccess = createAction('[Login Component] Login success', props<{ loggedIn: boolean }>());
export const loginUnsuccess = createAction('[Login Component] Login unsuccess', props<{ loggedIn: boolean }>());

// hranie hry - načítanie postavy
export const characterLoad = createAction('[Play game Component] Character load');








export const routerLoadCharacter = createAction('[Router] Load character');
