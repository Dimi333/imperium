import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoadGame from '../reducers/load-game.reducer';

export const selectLoadGameState = createFeatureSelector<fromLoadGame.State>(
  fromLoadGame.loadGameFeatureKey
);

export const selectIsLoggedIn = createSelector(
	selectLoadGameState,
	(state: fromLoadGame.State) => state
);
