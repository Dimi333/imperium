import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login.effects';
import { ImperiumStore, playerFeatureKey } from './store';
import * as fromLogin from './login.reducer';
import * as fromSettings from './settings.reducer';

export const reducers: ActionReducerMap<ImperiumStore> = {
	login: fromLogin.reducer,
	settings: fromSettings.reducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(playerFeatureKey, reducers ), 
  ]
})
export class ImpStoreModule { }
