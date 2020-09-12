import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Player, playerFeatureKey } from './login.reducer';

export interface AppState {
	login: Player
}

export const selectFeature = createFeatureSelector<Player>('login');

export const selectPlayerName = createSelector(
	selectFeature,
	(state: Player) => state.name
);
