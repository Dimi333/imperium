import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { tap, withLatestFrom, filter } from 'rxjs/operators';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from './../login.service';
import { ImperiumStore, Player } from './store';
import { routerNavigatedAction, SerializedRouterStateSnapshot } from '@ngrx/router-store';

@Injectable()
export class LoginEffects {

	constructor(
		private _ls: LoginService,
		private action$: Actions
	) {}

	characterLoad = createEffect(() => this.action$.pipe(
		ofType('[Play game Component] Load character'),
		mergeMap(({ login }) => this._ls.loadCharacter(login)
			 .pipe(
				map((isLoaded: boolean) => {
					if(isLoaded) {
						return { type: "[Play game component] Load success"}
					} else {
						return { type: "[Play game component] Load unsuccess" }
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
		ofType('[New game Component] Character create'),
		mergeMap(({ login }) => this._ls.saveCharacter(login)
			 .pipe(
				map((isCreated: boolean) => {
					if(isCreated) {
						return { type: "[New game component] Character created" }
					} else {
						return { type: "[New game component] Character not created" }
					}
				}),
				catchError(() => EMPTY)
			 ))
		)
	);

	/*createCharacter = createEffect(() => this.action$.pipe(
		ofType('[Login Component] Login create'),
		tap(({ login }) => this._ls.saveCharacter(login)),
	), { dispatch: false });*/
}

