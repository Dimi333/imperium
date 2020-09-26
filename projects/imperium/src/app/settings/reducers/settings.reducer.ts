import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from '../actions/settings.actions';

export const settingsFeatureKey = 'settings';

export interface State {
	doNotLogout: boolean
}

export const initialState: State = {
	doNotLogout: false
};


export const reducer = createReducer(
  initialState,

  on(SettingsActions.loadSettings, state => state),
  on(SettingsActions.loadSettingsSuccess, (state, action) => { return { doNotLogout: action.data }}),
  on(SettingsActions.loadSettingsFailure, (state, action) => state),
);

