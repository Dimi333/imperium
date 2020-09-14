import { createReducer, on, Action } from '@ngrx/store';
import { loginStarts, loginCreate, loginSuccess, loginUnsuccess } from './login.actions';
import { Player } from './store';

export const playerFeatureKey = 'login';

export const initialState: Player = {
	loggedIn: false,
	name: "",
	password: ""
};

export const loginReducer = createReducer(
	initialState,
	on(loginStarts, (state, { login }) => ({ loggedIn: true, name: login.name, password: login.password })),
	on(loginCreate, (state, { login }) => ({ loggedIn: true, name: login.name, password: login.password })),
	on(loginSuccess, (state, { login }) => ({ loggedIn: true, name: login.name, password: login.password })),
	on(loginUnsuccess, (state, { login }) => ({ loggedIn: false, name: login.name, password: login.password }))
);

export function reducer(state: Player | undefined, action: Action) {
	return loginReducer(state, action);
}
