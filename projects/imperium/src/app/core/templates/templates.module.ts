import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [MainLayoutComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
	MainLayoutComponent
  ]
})
export class TemplatesModule { }
