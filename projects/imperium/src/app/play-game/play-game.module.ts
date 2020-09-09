import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game/play-game.component';
import { PlayGameRoutingModule } from './play-game-routing.module';

@NgModule({
  declarations: [PlayGameComponent],
  imports: [
    CommonModule,
    PlayGameRoutingModule
  ]
})
export class PlayGameModule { }
