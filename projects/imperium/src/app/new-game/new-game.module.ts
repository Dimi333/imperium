import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { NewGameRoutingModule } from './new-game-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromNewGame from './reducers/new-game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewGameEffects } from './effects/new-game.effects';

@NgModule({
  declarations: [NewGameComponent],
  imports: [
    CommonModule,
    NewGameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromNewGame.newGameFeatureKey, fromNewGame.reducer),
    EffectsModule.forFeature([NewGameEffects]),
  ]
})
export class NewGameModule { }
