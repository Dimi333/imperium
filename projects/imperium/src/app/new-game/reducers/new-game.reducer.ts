import { Action, createReducer, on } from '@ngrx/store';
import * as NewGameActions from '../actions/new-game.actions';

export const newGameFeatureKey = 'newGame';

export interface State {
	token: string;
}

export const initialState: State = {
	token: ""
};


export const reducer = createReducer(
  initialState,

  on(NewGameActions.loadNewGames, state => state),
  on(NewGameActions.loadNewGamesSuccess, (state, action) => { return { token: action.data }}),
  on(NewGameActions.loadNewGamesFailure, (state, action) => state),

);

