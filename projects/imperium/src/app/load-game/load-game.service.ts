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
		const name = localStorage.getItem(data.name);
		const password = localStorage.getItem(data.password);
		
		if(name && password) {
			localStorage.setItem("token", "tokenasjkfôljf4Q3RQ34W5RFfrefsdjo");
			return of("TokenSDFSDF43RQ4RFčťdsfkaskfjjfreG");
		} else {
			return throwError("");
		}
	}
}
