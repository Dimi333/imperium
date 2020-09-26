import { createReducer, on, Action } from '@ngrx/store';
import { loadSettings } from './settings.actions';
import { ImperiumStore, Player, Settings, initialState } from './store';

export const settingsReducer = createReducer(
	initialState,
	on(loadSettings, (state, { settings }) => ({ doNotLogout: settings })),
);

export function reducer(state: ImperiumStore, action: Action) {
	return settingsReducer(state, action);
}
