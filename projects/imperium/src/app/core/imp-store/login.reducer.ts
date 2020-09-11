import { createReducer, on, Action } from '@ngrx/store';
import { loginName, loginCreate, loginSuccess } from './login.actions';

export const playerFeatureKey = 'login';

export interface Player {
	name: string;
	password: string;
}

export const initialState: Player = {
	name: "",
	password: ""
};

export const loginReducer = createReducer(
	initialState,
	on(loginName, (state, { login }) => ({ name: login.name, password: login.password })),
	on(loginCreate, (state, { login }) => ({ name: login.name, password: login.password })),
	on(loginSuccess, (state, { login }) => ({ name: login.name, password: login.password }))
);

export function reducer(state: Player | undefined, action: Action) {
	return loginReducer(state, action);
}
