import { Action, createReducer, on } from '@ngrx/store';
import * as LoadGameActions from '../actions/load-game.actions';

export const loadGameFeatureKey = 'loadGame';

export interface State {
	token: string;
}

export const initialState: State = {
	token: ""
};


export const reducer = createReducer(
  initialState,

  on(LoadGameActions.loadLoadGames, state => state),
  on(LoadGameActions.loadLoadGamesSuccess, (state, action) => { return { token: action.data }}),
  on(LoadGameActions.loadLoadGamesFailure, (state, action) => state),

);

