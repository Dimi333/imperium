import { Action, createReducer, on } from '@ngrx/store';
import * as LoadGameActions from '../actions/load-game.actions';

export const loadGameFeatureKey = 'loadGame';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(LoadGameActions.loadLoadGames, state => state),
  on(LoadGameActions.loadLoadGamesSuccess, (state, action) => state),
  on(LoadGameActions.loadLoadGamesFailure, (state, action) => state),

);

