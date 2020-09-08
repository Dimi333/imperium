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
		mergeMap(() => this._ls.saveCharacter("Jaro")
			 .pipe(
				map(character => ({ type: "[Login component] Login success", payload: character})),
				catchError(() => EMPTY)
			 ))
		)
	);
}

