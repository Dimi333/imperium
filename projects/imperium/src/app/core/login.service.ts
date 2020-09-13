import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Player } from './imp-store/store';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public saveCharacter(char: Player): Observable<Player> {
	  localStorage.setItem("name", char.name);
	  localStorage.setItem("password", char.password);

	  return of(char);
  }

  public loadCharacter(char: Player): Observable<boolean> {
	  const password = localStorage.getItem("password");
	  const name = localStorage.getItem("name");

	  if(char.name === name && char.password === password) {
		return of(true);
	  } else {
		return of(false);
	  }
  }	  
}
