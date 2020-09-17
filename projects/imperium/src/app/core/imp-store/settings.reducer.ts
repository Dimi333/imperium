import { createReducer, on, Action } from '@ngrx/store';
import { loadSettings } from './settings.actions';
import { ImperiumStore, Player, initialState } from './store';

export const settingsReducer = createReducer(
	initialState,
	on(loadSettings, (state, { settings }) => ({ settings: { doNotLogout: settings }})),
);
