import { Injectable } from '@angular/core';
import { SettingsService } from './../settings/settings.service';
import { Observable, of } from 'rxjs';
import * as fromModel from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  constructor(private settings: SettingsService) { }

  logout(): void {
	const settings = this.settings.returnSettings();
  }

  loadCharacter(): Observable<fromModel.Character> {
	  const char: fromModel.Character = {
		  name: "Dimi3",
		  position: "trhovisko", 
		  money: {
			  gold: 0,
			  silver: 0,
			  bronze: 0
		  }
	  };

	  return of(char);
  }

  loadInventory(): Observable<fromModel.Inventory> {
	const inventory = [
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
	];

	return of(inventory);
  }

  loadToken(): string {
	  const token = localStorage.getItem("token"); 

	  if(token) {
		return token;
	  } else {
		return "";
	  }
  }

  public buyItem(id: number): Observable<fromModel.Item> {
	  const item: fromModel.Item = {
		name: "Podkova",
		id: 3,
		weight: 25
	  };

	return of(item);
  }
}
