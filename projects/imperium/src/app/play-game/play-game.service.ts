import { Injectable } from '@angular/core';
import { SettingsService } from './../settings/settings.service';
import { Observable, of } from 'rxjs';
import * as model from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  constructor(private settings: SettingsService) { }

  logout(): void {
	const settings = this.settings.returnSettings();
  }

  loadCharacter(): Observable<model.Character> {
	  const char: model.Character = {
		  name: "Dimi3",
		  position: "trhovisko",
		  inventory: [
			  {
				name: "Nožík",
				id: 1,
				weight: 30,
			  },
			  {
				name: "Kožené rukavice",
				id: 2,
				weight: 12
			  },
			  {
				name: ".44 náboje",
				id: 3,
				weight: 20
			  }
		  ],
		  money: {
			  gold: 0,
			  silver: 0,
			  bronze: 0
		  }
	  };

	  return of(char);
  }

  loadToken(): string {
	  const token =localStorage.getItem("token"); 

	  if(token) {
		return token;
	  } else {
		return "";
	  }
  }

  public buyItem(id: number): Observable<boolean> {
	return of(true);
  }
}
