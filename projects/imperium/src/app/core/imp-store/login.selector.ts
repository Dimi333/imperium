import { createSelector, createFeatureSelector } from '@ngrx/store';
import { playerFeatureKey } from './login.reducer';
import { Player } from './store';

export interface AppState {
	login: Player
}

export const selectFeature = createFeatureSelector<Player>('login');

export const selectPlayerName = createSelector(
	selectFeature,
	(state: Player) => state.name
);

export const selectPlayerLoggedIn = createSelector(
	selectFeature,
	(state: Player) => state.loggedIn
);
