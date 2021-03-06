import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	CoreModule,	
	FormsModule,
	ReactiveFormsModule,
	StoreModule.forRoot(reducers, { metaReducers }),
	EffectsModule.forRoot(),
	!environment.production ? StoreDevtoolsModule.instrument() : [],
	StoreDevtoolsModule.instrument({
		maxAge: 25, // Retains last 25 states
		logOnly: environment.production, // Restrict extension to log-only mode
    	}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
	ReactiveFormsModule
  ]
})
export class AppModule { }
