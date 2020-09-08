import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './login.reducer';
import { LoginEffects } from './login.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ login: loginReducer }), 
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class ImpStoreModule { }
