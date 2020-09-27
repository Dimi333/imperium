import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Character {
	name: string;
	password: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewGameService {
	constructor() { }

	public createNewGame(data: Character): Observable<string> {
		console.log(data)
		localStorage.setItem(data.name, data.name);
		localStorage.setItem(data.password, data.password);

		// toto pôjde na server aby uložilo novú postavu
		return of("tokenasjkfôljf4Q3RQ34W5RFfrefsdjo");
	}
}
