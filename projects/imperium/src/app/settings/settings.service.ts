import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public saveSetting(setting: string, value: any): void {
	switch(setting) {
		case "doNotLogout":
			localStorage.setItem("doNotLogout", value);
			break;
	}
  }

  public loadSettings(): string {
	let settings = localStorage.getItem("doNotLogout");

	if(!settings) {
		settings = ""; 
	}

	return settings;
  }

  public returnSettings(): string {
	let settings = localStorage.getItem("doNotLogout");

	if(!settings) {
		settings = ""; 
	}

	return settings;
  }
}
