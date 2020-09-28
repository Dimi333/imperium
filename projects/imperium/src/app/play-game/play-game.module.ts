import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game/play-game.component';
import { PlayGameRoutingModule } from './play-game-routing.module';
import { LeftIngameMenuComponent } from './left-ingame-menu/left-ingame-menu.component';
import { EffectsModule } from '@ngrx/effects';
import { PlayGameEffects } from './effects/play-game.effects';
import { StoreModule } from '@ngrx/store';
import * as fromPlayGame from './reducers/play-game.reducer'; 

@NgModule({
  declarations: [PlayGameComponent, LeftIngameMenuComponent],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
    StoreModule.forFeature(fromPlayGame.playGameFeatureKey, fromPlayGame.reducer),
    EffectsModule.forFeature([PlayGameEffects]),
  ],
  exports: [
	LeftIngameMenuComponent
  ]
})
export class PlayGameModule { 
	constructor() {
	}
}
