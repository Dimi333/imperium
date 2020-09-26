import { createAction, props } from '@ngrx/store';
import { Character } from './../../new-game/new-game.service';

export const loadLoadGames = createAction(
  '[LoadGame] Load LoadGames',
  props<{ data: Character }>()
);

export const loadLoadGamesSuccess = createAction(
  '[LoadGame] Load LoadGames Success',
  props<{ data: string }>()
);

export const loadLoadGamesFailure = createAction(
  '[LoadGame] Load LoadGames Failure',
  props<{ error: string }>()
);
