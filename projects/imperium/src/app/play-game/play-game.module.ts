import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game/play-game.component';
import { PlayGameRoutingModule } from './play-game-routing.module';
import { LeftIngameMenuComponent } from './left-ingame-menu/left-ingame-menu.component';

@NgModule({
  declarations: [PlayGameComponent, LeftIngameMenuComponent],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
  ],
  exports: [
	LeftIngameMenuComponent
  ]
})
export class PlayGameModule { }
