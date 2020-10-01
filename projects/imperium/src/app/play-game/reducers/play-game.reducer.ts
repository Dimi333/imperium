import { Action, createReducer, on } from '@ngrx/store';
import * as PlayGameActions from '../actions/play-game.actions';
import * as fromModel from './../../core/model';

export const playGameFeatureKey = 'playGame';

export interface State {
	character: fromModel.Character;
	inventory: fromModel.Inventory;
}

export const initialState: State = {
	character: {
		name: "",
		position: "",
		money: {
			gold: 0,
			silver: 0,
			bronze: 0
		}
	},
	inventory: []
};


export const reducer = createReducer(
  initialState,

  on(PlayGameActions.loadPlayGames, state => state),
  on(PlayGameActions.loadPlayGamesSuccess, (state, action) => { return { character: action.data }}),
  on(PlayGameActions.loadPlayGamesFailure, (state, action) => state),
  on(PlayGameActions.loadInventory, state => state),
  on(PlayGameActions.loadInventorySuccess, (state, action) => { return { ...state, inventory: [...action.data] }}),
  on(PlayGameActions.loadInventoryFailure, (state, action) => state),
  on(PlayGameActions.buyItemSuccess, (state, action) => { return { ...state, inventory: [...state.inventory, action.data] }} )
);

