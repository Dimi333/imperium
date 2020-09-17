import { Injectable } from '@angular/core';
import { SettingsService } from './../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  constructor(private settings: SettingsService) { }

  logout(): void {
	const settings = this.settings.returnSettings();
  }
}
