import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { GameLayoutComponent } from './game-layout/game-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, LeftMenuComponent, GameLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
	MainLayoutComponent,
	GameLayoutComponent
  ]
})
export class TemplatesModule { }
