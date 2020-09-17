import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ImperiumStore, Player } from './store';
import { playerFeatureKey } from './store';

export const selectFeature = createFeatureSelector<ImperiumStore>(playerFeatureKey);

export const selectPlayerName = createSelector(
	selectFeature,
	(state: ImperiumStore) => state.login.name
);

export const selectPlayerLoggedIn = createSelector(
	selectFeature,
	(state: ImperiumStore) => state.loggedIn
);
