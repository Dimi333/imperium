import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from './../login.service';

@Injectable()
export class LoginEffects {

	constructor(
		private _ls: LoginService,
		private action$: Actions
	) {}

	loginCharacter = createEffect(() => this.action$.pipe(
		ofType('[Login Component] Login starts'),
		mergeMap(() => this._ls.loadCharacter("Jaro")
			 .pipe(
				map(character => {
					if(character === "Jaro") {
						return { type: "[Login component] Login success", payload: character}
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
		mergeMap(() => this._ls.saveCharacter("Jaro")
			 .pipe(
				map(character => {
					if(character === "Jaro") {
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

