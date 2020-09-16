import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpStoreModule } from './core/imp-store/imp-store.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	CoreModule,	
	EffectsModule.forRoot(),
	StoreModule.forRoot({}),
	ImpStoreModule,
	FormsModule,
	ReactiveFormsModule,
		StoreDevtoolsModule.instrument({
		maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
	}),
	// StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
	ReactiveFormsModule
  ]
})
export class AppModule { }
