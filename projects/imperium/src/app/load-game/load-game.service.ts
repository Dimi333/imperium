import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './../new-game/new-game.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadGameService {

	constructor() { }

	public loadGame(data: Character): Observable<string> {
		// tuto to pôjde na server a načíta postavu
		// zatiaľ pôjde do localStorage

		console.log("toto sú data", data);

		console.log("toto sú data", data);

		const name = localStorage.getItem(data.name);
		const password = localStorage.getItem(data.password);
		
		console.log("name", name);
		console.log("password", password);
		
		if(name && password) {
			return of("TokenSDFSDF43RQ4RFčťdsfkaskfjjfreG");
		} else {
			return throwError("");
		}
	}
}
