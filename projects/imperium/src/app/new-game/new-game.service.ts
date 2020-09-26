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
		// toto pôjde na server aby uložilo novú postavu
		return of("tokenasjkfôljf4Q3RQ34W5RFfrefsdjo");
	}
}
