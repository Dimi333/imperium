import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public saveCharacter(name: string): Observable<string> {
	  localStorage.setItem("name", name);

	  return of(name);
  }

  public loadCharacter(name: string): Observable<string> {
	  const nameFromLS = localStorage.getItem(name);

	  if(nameFromLS)
	  	return of(nameFromLS);
	  else
		  return of("");
  }	  
}
