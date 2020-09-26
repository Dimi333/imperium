import { createAction, props } from '@ngrx/store';

export const loadLoadGames = createAction(
  '[LoadGame] Load LoadGames'
);

export const loadLoadGamesSuccess = createAction(
  '[LoadGame] Load LoadGames Success',
  props<{ data: any }>()
);

export const loadLoadGamesFailure = createAction(
  '[LoadGame] Load LoadGames Failure',
  props<{ error: any }>()
);
