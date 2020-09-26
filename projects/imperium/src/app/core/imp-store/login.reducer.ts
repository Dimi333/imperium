import { createReducer, on, Action } from '@ngrx/store';
import { loginStarts, characterCreated, loginSuccess, loginUnsuccess } from './login.actions';
import { ImperiumStore, initialState, Player } from './store';

export const loginReducer = createReducer(
	initialState,
	on(loginStarts, (state, { login }) => ({ name: login.name, password: login.password })),
);

export function reducer(state: ImperiumStore, action: Action) {
	return loginReducer(state, action);
}
