import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { NewGameRoutingModule } from './new-game-routing.module';

@NgModule({
  declarations: [NewGameComponent],
  imports: [
    CommonModule,
    NewGameRoutingModule
  ]
})
export class NewGameModule { }
