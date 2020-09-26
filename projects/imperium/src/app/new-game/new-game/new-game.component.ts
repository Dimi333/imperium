import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'imp-new-game',
	templateUrl: './new-game.component.html',
	styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit, OnDestroy {
	private _destroyed$ = new Subject<boolean>();
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});

	constructor(
		// private store: Store<ImperiumStore>,
		// private updates$: ActionsSubject,
		private _router: Router
	) {
		/*updates$.pipe(
			ofType('[New game component] Character created'),
			takeUntil(this._destroyed$),
			tap(() => this._router.navigate(['/load-game']))
		)
		.subscribe();

		updates$.pipe(
			ofType('[New game component] Character not created'),
			takeUntil(this._destroyed$),
			tap(() => alert("Niečo sa pokazilo"))
		)
		.subscribe();*/
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this._destroyed$.next(true);
        	this._destroyed$.complete();
	}

	public create():void {
		const login = { name: this.loginForm.get("loginName")?.value, password: this.loginForm.get("loginPassword")?.value };
		// this.store.dispatch(characterCreate({ login: login }));
	}
}
