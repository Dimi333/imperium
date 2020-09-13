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

  public loadSettings(): any {
	return localStorage.getItem("doNotLogout");
  }
}
