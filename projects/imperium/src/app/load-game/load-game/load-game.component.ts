import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginName } from './../../core/imp-store/login.actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit {
	public name$: Observable<string>;
	public loginForm: FormGroup = new FormGroup({
		loginName: new FormControl('')
	});
	
	constructor(private store: Store<{ login: string }>) { 
		this.name$ = store.pipe(select('login'));
	}

	ngOnInit(): void {
	}

	public login():void {
		this.store.dispatch(loginName({ name: this.loginForm.get("loginName")?.value }));
	}

}
