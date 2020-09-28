import { Injectable } from '@angular/core';
import { SettingsService } from './../settings/settings.service';
import { Observable, of } from 'rxjs';

export interface Character {
	name: string
	position: string
}

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  constructor(private settings: SettingsService) { }

  logout(): void {
	const settings = this.settings.returnSettings();
  }

  loadCharacter(): Observable<Character> {
	  const char: Character = {name: "Dimi3", position: "trhovisko"};

	  return of(char);
  }
}
