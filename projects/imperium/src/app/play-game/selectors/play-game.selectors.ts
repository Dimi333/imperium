import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayGame from '../reducers/play-game.reducer';
import * as fromModel from './../../core/model';

export const selectPlayGameState = createFeatureSelector<fromPlayGame.State>(
  fromPlayGame.playGameFeatureKey
);

export const selectCharacter = createSelector(
  selectPlayGameState,
  (state: fromPlayGame.State) => state.character
)

export const selectInventory = createSelector(
  selectPlayGameState,
  (state: fromPlayGame.State) => state.inventory
);

export const selectCharacterMoney = createSelector(
  selectCharacter,
  (state: fromModel.Character) => state.money
);

export const selectCharacterPosition = createSelector(
  selectCharacter,
  (state: fromModel.Character) => state.position
);

export const selectCharacterName = createSelector(
  selectCharacter,
  (state: fromModel.Character) => state.name
);
