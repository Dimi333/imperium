import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadGameRoutingModule } from './load-game-routing.module';
import { LoadGameComponent } from './load-game/load-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromLoadGame from './reducers/load-game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadGameEffects } from './effects/load-game.effects';


@NgModule({
  declarations: [LoadGameComponent],
  imports: [
    CommonModule,
    LoadGameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromLoadGame.loadGameFeatureKey, fromLoadGame.reducer),
    EffectsModule.forFeature([LoadGameEffects])
  ]
})
export class LoadGameModule { }
