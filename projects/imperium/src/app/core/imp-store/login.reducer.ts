import { createReducer, on } from '@ngrx/store';
import { loginName, loginSuccess } from './login.actions';

export const initialState = "";

export const loginReducer = createReducer(
	initialState,
	on(loginName, (state, login) => login.name)
);

export const loginSuccessReducer = createReducer(
	initialState,
	on(loginSuccess, (state, login) => login.name)
);

