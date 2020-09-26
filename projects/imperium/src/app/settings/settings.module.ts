import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import * as fromSettings from './reducers/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './effects/settings.effects';
import * as SettingsActions from './actions/settings.actions';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromSettings.settingsFeatureKey, fromSettings.reducer),
    EffectsModule.forFeature([SettingsEffects])
  ]
})
export class SettingsModule {
	constructor(
		private store: Store
	) {
		this.store.dispatch(SettingsActions.loadSettings());
	}
}
