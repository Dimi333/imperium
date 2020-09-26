import { createAction, props } from '@ngrx/store';
import { Character } from './../new-game.service';

export const loadNewGames = createAction(
  '[NewGame] Load NewGames',
  props<{data: Character}>()
);

export const loadNewGamesSuccess = createAction(
  '[NewGame] Load NewGames Success',
  props<{ data: string }>()
);

export const loadNewGamesFailure = createAction(
  '[NewGame] Load NewGames Failure',
  props<{ error: string }>()
);
