import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { NewGameRoutingModule } from './new-game-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewGameComponent],
  imports: [
    CommonModule,
    NewGameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewGameModule { }
