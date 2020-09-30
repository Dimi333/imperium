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

export const buyItem = createAction(
  '[PlayGame] Buy item',
  props<{ data: any }>()
);

export const buyItemSuccess = createAction(
  '[PlayGame] Buy item Success',
  props<{ data: any }>()
);

export const buyItemFailure = createAction(
  '[PlayGame] Buy item Failure',
  props<{ error: any }>()
);
