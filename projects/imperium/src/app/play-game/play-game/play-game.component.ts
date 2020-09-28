import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromPlayGameSelectors from './../selectors/play-game.selectors';

@Component({
  selector: 'imp-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.sass']
})
export class PlayGameComponent implements OnInit {
	public position$: Observable<string>;
	public name$: Observable<string>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.position$ = this.store.select(fromPlayGameSelectors.selectCharacterPosition);
		this.name$ = this.store.select(fromPlayGameSelectors.selectCharacterName);
	}
}
