import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromLoginSelector from './../../core/imp-store/login.selector';
import { ImperiumStore } from './../../core/imp-store/store';
import * as fromSettings from './../../core/imp-store/settings.actions';

@Component({
  selector: 'imp-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.sass']
})
export class PlayGameComponent implements OnInit {
	public name$: Observable<string>;

	constructor(private store: Store<ImperiumStore>) {
		this.store.dispatch(fromSettings.loadSettings());
		this.name$ = store.pipe(select(fromLoginSelector.selectPlayerName));
	}

	ngOnInit(): void {
	}
}
