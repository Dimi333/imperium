import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNewGame from '../reducers/new-game.reducer';

export const selectNewGameState = createFeatureSelector<fromNewGame.State>(
  fromNewGame.newGameFeatureKey
);
