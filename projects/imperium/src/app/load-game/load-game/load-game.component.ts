import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginName } from './../../core/imp-store/login.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from './../../core/imp-store/login.reducer';
import * as fromLoginSelector from './../../core/imp-store/login.selector';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit {
	public name$: Observable<string>;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});
	
	constructor(private store: Store<{ name: string, password: string }>) { 
		this.name$ = store.select(appState => appState.login.name);
	}

	ngOnInit(): void {
	}

	public login():void {
		const login: Player = { name: this.loginForm.get("loginName")?.value, password: "heslo" };

		this.store.dispatch(loginName({ login: login }));
	}

}
