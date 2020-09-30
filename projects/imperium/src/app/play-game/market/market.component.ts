import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromPlayGameSelectors from './../selectors/play-game.selectors';
import * as fromPlayGameActions from './../actions/play-game.actions';

@Component({
  selector: 'imp-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {
	public position$: Observable<string>;
	public name$: Observable<string>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.position$ = this.store.select(fromPlayGameSelectors.selectCharacterPosition);
		this.name$ = this.store.select(fromPlayGameSelectors.selectCharacterName);
	}

	public buyItem(id: number): void {
		this.store.dispatch(fromPlayGameActions.buyItem({ data: 1}));
	}
}
