import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './../new-game/new-game.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGameService {

	constructor() { }

	public loadGame(data: Character): Observable<string> {
		// tuto to pôjde na server a načíta postavu
		return of("TokenSDFSDF43RQ4RFčťdsfkaskfjjfreG");
	}
}
