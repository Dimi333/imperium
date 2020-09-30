import { Component, OnInit } from '@angular/core';
import * as fromPlayGameActions from './../../../play-game/actions/play-game.actions';
import * as fromPlayGameSelect from './../../../play-game/selectors/play-game.selectors';
import { Store } from '@ngrx/store';
import * as fromModel from './../../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'imp-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.sass']
})
export class GameLayoutComponent implements OnInit {
	public characterInventory$: Observable<fromModel.Inventory>;
	public characterMoney$: Observable<fromModel.Money>;

  constructor(private store: Store) { }

  ngOnInit(): void {
	this.store.dispatch(fromPlayGameActions.loadPlayGames());
	this.characterInventory$ = this.store.select(fromPlayGameSelect.selectCharacterInventory);
	this.characterMoney$ = this.store.select(fromPlayGameSelect.selectCharacterMoney);
  }

}
