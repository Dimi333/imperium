import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSettings from '../reducers/settings.reducer';

export const selectSettingsState = createFeatureSelector<fromSettings.State>(
  fromSettings.settingsFeatureKey
);

export const selectDoNotLogout = createSelector(
	selectSettingsState,
	(state) => state?.doNotLogout
)
