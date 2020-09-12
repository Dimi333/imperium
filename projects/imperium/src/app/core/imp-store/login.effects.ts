import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from './../login.service';
import { Player } from './login.reducer';

@Injectable()
export class LoginEffects {

	constructor(
		private _ls: LoginService,
		private action$: Actions
	) {}

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
		mergeMap(({ login }) => this._ls.saveCharacter(login)
			 .pipe(
				map((character: Player) => {
					if(character.name === "Jaro") {
						return { type: "[Login component] Login success", payload: character}
					} else {
						return { type: "[Login component] Login unsuccess" }
					}
				}),
				catchError(() => EMPTY)
			 ))
		)
	);
}

