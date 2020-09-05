import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [
  	TemplatesModule
  ]
})
export class CoreModule { }
