import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginCreate } from './../../core/imp-store/login.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from './../../core/imp-store/login.reducer';
import * as fromLoginSelector from './../../core/imp-store/login.selector';

@Component({
	selector: 'imp-new-game',
	templateUrl: './new-game.component.html',
	styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {
	public name$: Observable<string>;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl(''),
		loginPassword: new FormControl('')
	});

	constructor(private store: Store<{ login: string, password: string }>) {
		this.name$ = this.store.pipe(select(fromLoginSelector.selectPlayerName));
	}

	ngOnInit(): void {
	}

	public login():void {
		const login = { name: this.loginForm.get("loginName")?.value, password: this.loginForm.get("loginPassword")?.value };
		this.store.dispatch(loginCreate({ login: login }));
	}
}
