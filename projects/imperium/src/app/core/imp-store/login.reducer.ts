import { createReducer, on } from '@ngrx/store';
import { loginName } from './login.actions';

export const initialState = "";

const _loginReducer = createReducer(
	initialState,
	on(loginName, (state) => state + "Jaro")
);

export function loginReducer(state: any, action: any) {
	return _loginReducer(state, action)
}
