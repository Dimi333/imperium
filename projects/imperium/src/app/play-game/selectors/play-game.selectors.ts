import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayGame from '../reducers/play-game.reducer';

export const selectPlayGameState = createFeatureSelector<fromPlayGame.State>(
  fromPlayGame.playGameFeatureKey
);

export const selectCharacter = createSelector(
  selectPlayGameState,
  (state: fromPlayGame.State) => state.character
);

export const selectCharacterPosition = createSelector(
  selectCharacter,
  (state) => state.position
);

export const selectCharacterName = createSelector(
  selectCharacter,
  (state) => state.name
);
