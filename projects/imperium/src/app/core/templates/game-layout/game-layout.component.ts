import { Component, OnInit } from '@angular/core';
import * as fromPlayGameActions from './../../../play-game/actions/play-game.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'imp-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.sass']
})
export class GameLayoutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
		this.store.dispatch(fromPlayGameActions.loadPlayGames());
  }

}
