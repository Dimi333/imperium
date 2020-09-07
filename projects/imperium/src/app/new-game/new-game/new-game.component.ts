import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'imp-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {
	public name$: Observable<string>;

	constructor(private store: Store<{ login: string }>) {
		this.name$ = store.pipe(select('login'));
	}

	ngOnInit(): void {
	}
}
