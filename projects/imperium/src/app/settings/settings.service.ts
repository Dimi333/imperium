import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Store } from '@ngrx/store';
import * as SettingsActions from './actions/settings.actions';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
	private store: Store
  ) { }

  public saveSetting(setting: string, value: any): void {
	switch(setting) {
		case "doNotLogout":
			localStorage.setItem("doNotLogout", value);
			break;
	}

	this.store.dispatch(SettingsActions.loadSettings());
  }

  public loadSettings(): Observable<boolean> {
	let settings = localStorage.getItem("doNotLogout");

	if(!settings) {
		settings = 'false'
	}

	return of(settings === 'true' ? true : false);
  }

  public returnSettings(): string {
	let settings = localStorage.getItem("doNotLogout");

	if(!settings) {
		settings = ""; 
	}

	return settings;
  }
}
