import { Component, OnInit, OnDestroy } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { loginStarts } from './../../core/imp-store/login.actions';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromLoginSelector from './../../core/imp-store/login.selector';
import { Player } from './../../core/imp-store/store';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit, OnDestroy {
	private _destroyed$ = new Subject<boolean>();
	private _isLoggedIn$: Observable<boolean>;
	private _sub: Subscription;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});
	
	constructor(
		private store: Store<Player>,
		private router: Router,
		private updates$: ActionsSubject,
	) { 
		this._isLoggedIn$ = this.store.pipe(select(fromLoginSelector.selectPlayerLoggedIn));

		updates$.pipe(
			ofType('[Login component] Login success'),
			takeUntil(this._destroyed$),
			tap(() => this.router.navigate(['/play-game']))
		)
		.subscribe();

		updates$.pipe(
			ofType('[Login component] Login unsuccess'),
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
		const login: Player = { name: this.loginForm.get("loginName")?.value, password: this.loginForm.get("loginPassword")?.value };

		this.store.dispatch(loginStarts({ login: login }));

		this._sub = this._isLoggedIn$.subscribe((isLoggedIn:boolean) => isLoggedIn ? this.router.navigate(['/play-game']) : this.router.navigate(['/load-game']));
	}

}
