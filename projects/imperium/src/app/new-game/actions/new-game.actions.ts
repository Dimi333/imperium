import { createAction, props } from '@ngrx/store';

export const loadNewGames = createAction(
  '[NewGame] Load NewGames'
);

export const loadNewGamesSuccess = createAction(
  '[NewGame] Load NewGames Success',
  props<{ data: any }>()
);

export const loadNewGamesFailure = createAction(
  '[NewGame] Load NewGames Failure',
  props<{ error: any }>()
);
