import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login.effects';
import { playerFeatureKey } from './store';
import * as fromLogin from './login.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(playerFeatureKey, fromLogin.reducer ), 
  ]
})
export class ImpStoreModule { }
