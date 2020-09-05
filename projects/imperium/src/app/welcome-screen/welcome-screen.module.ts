import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WelcomeScreenRoutingModule } from './welcome-screen-routing.module';

@NgModule({
  declarations: [WelcomeScreenComponent],
  imports: [
    CommonModule,
    WelcomeScreenRoutingModule
  ]
})
export class WelcomeScreenModule { }
