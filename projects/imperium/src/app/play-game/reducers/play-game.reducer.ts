import { Action, createReducer, on } from '@ngrx/store';
import * as PlayGameActions from '../actions/play-game.actions';

export const playGameFeatureKey = 'playGame';

export interface Character {
	name: string;
	position: string;
}

export interface State {
	character: Character
}

export const initialState: State = {
	character: {
		name: "",
		position: ""
	}
};


export const reducer = createReducer(
  initialState,

  on(PlayGameActions.loadPlayGames, state => state),
  on(PlayGameActions.loadPlayGamesSuccess, (state, action) => { return { character: action.data }}),
  on(PlayGameActions.loadPlayGamesFailure, (state, action) => state),

);

