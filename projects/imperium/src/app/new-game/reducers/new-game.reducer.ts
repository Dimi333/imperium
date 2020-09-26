import { Action, createReducer, on } from '@ngrx/store';
import * as NewGameActions from '../actions/new-game.actions';

export const newGameFeatureKey = 'newGame';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(NewGameActions.loadNewGames, state => state),
  on(NewGameActions.loadNewGamesSuccess, (state, action) => state),
  on(NewGameActions.loadNewGamesFailure, (state, action) => state),

);

