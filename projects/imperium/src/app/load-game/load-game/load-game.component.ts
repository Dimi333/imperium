import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginName } from './../../core/imp-store/login.actions';

@Component({
  selector: 'imp-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.sass']
})
export class LoadGameComponent implements OnInit {
	public name$: Observable<string>;
	
	constructor(private store: Store<{ login: string }>) { 
		this.name$ = store.pipe(select('login'));
	}

	ngOnInit(): void {
	}

	public login():void {
		this.store.dispatch(loginName());
	}

}
