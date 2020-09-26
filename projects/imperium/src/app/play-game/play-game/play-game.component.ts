import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'imp-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.sass']
})
export class PlayGameComponent implements OnInit {
	public name$: Observable<string>;

	constructor() {
	}

	ngOnInit(): void {
	}
}
