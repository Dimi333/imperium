import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadGameRoutingModule } from './load-game-routing.module';
import { LoadGameComponent } from './load-game/load-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoadGameComponent],
  imports: [
    CommonModule,
    LoadGameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoadGameModule { }
