import { createAction, props } from '@ngrx/store';

export const loadPlayGames = createAction(
  '[PlayGame] Load PlayGames'
);

export const loadPlayGamesSuccess = createAction(
  '[PlayGame] Load PlayGames Success',
  props<{ data: any }>()
);

export const loadPlayGamesFailure = createAction(
  '[PlayGame] Load PlayGames Failure',
  props<{ error: any }>()
);
