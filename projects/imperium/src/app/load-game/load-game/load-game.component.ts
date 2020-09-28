import { Component, OnInit, OnDestroy } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import * as fromLoadGameSelector from './../selectors/load-game.selectors';
import * as LoadGameActions from './../actions/load-game.actions';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit, OnDestroy {
	private _destroyed$ = new Subject<boolean>();
	private _isLoggedIn$: Observable<any>;
	private _sub: Subscription;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});
	
	constructor(
		private router: Router,
		private updates$: ActionsSubject,
		private store: Store
	) { 
		this.updates$.pipe(
			ofType('[LoadGame] Load LoadGames Success'),
			takeUntil(this._destroyed$),
			tap(() => this.router.navigate(['/play-game']))
		)
		.subscribe();

		this.updates$.pipe(
			ofType('[LoadGame] Load LoadGames Failure'),
			takeUntil(this._destroyed$),
			tap(() => alert("Nejde prihlásiť"))
		)
		.subscribe();
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if(this._sub)
			this._sub.unsubscribe();
	}

	public login():void {
		const login = { name: this.loginForm.get("loginName")?.value, password: this.loginForm.get("loginPassword")?.value };

		this.store.dispatch(LoadGameActions.loadLoadGames({data: login}));
	}

}
