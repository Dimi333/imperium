import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { loginName } from './../../core/imp-store/login.actions';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromLoginSelector from './../../core/imp-store/login.selector';
import { Player } from './../../core/imp-store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit, OnDestroy {
	private _isLoggedIn$: Observable<boolean>;
	private _sub: Subscription;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});
	
	constructor(private store: Store<Player>, private router: Router) { 
		this._isLoggedIn$ = this.store.pipe(select(fromLoginSelector.selectPlayerLoggedIn));
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if(this._sub)
			this._sub.unsubscribe();
	}

	public login():void {
		const login: Player = { loggedIn: false, name: this.loginForm.get("loginName")?.value, password: this.loginForm.get("loginPassword")?.value };

		this.store.dispatch(loginName({ login: login }));

		this._sub = this._isLoggedIn$.subscribe((isLoggedIn:boolean) => isLoggedIn ? this.router.navigate(['/play-game']) : null);
	}

}
