import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { tap, withLatestFrom, filter } from 'rxjs/operators';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from './../login.service';
import { Player } from './store';
import { routerNavigatedAction, SerializedRouterStateSnapshot } from '@ngrx/router-store';

@Injectable()
export class LoginEffects {

	constructor(
		private _ls: LoginService,
		private action$: Actions
	) {}

	loginLoad = createEffect(() => this.action$.pipe(
		ofType('[Login Component] Load character'),
		mergeMap(({ login }) => this._ls.loadCharacter(login)
			 .pipe(
				map((isLoaded: boolean) => {
					if(isLoaded) {
						return { type: "[Login component] Load success", payload: character }
					} else {
						return { type: "[Login component] Load unsuccess" }
					}
				}),
				catchError(() => EMPTY)
			 ))
		)
	);

	loginCharacter = createEffect(() => this.action$.pipe(
		ofType('[Login Component] Login starts'),
		mergeMap(({ login }) => this._ls.loadCharacter(login)
			 .pipe(
				map((isLoaded: boolean) => {
					if(isLoaded) {
						return { type: "[Login component] Login success" }
					} else {
						return { type: "[Login component] Login unsuccess" }
					}
				}),
				catchError(() => EMPTY)
			 ))
		)
	);

	createCharacter = createEffect(() => this.action$.pipe(
		ofType('[Login Component] Login create'),
		tap(({ login }) => this._ls.saveCharacter(login)),
	), { dispatch: false });
}

