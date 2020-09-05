import { createReducer, on } from '@ngrx/store';
import { loginName } from './login.actions';

export const initialState = "";

export const loginReducer = createReducer(
	initialState,
	on(loginName, (state, login) => login.name)
);


