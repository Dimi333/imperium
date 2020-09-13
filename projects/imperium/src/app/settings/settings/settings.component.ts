import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';	
import { SettingsService } from './../settings.service';
import { Subscription  } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'imp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit, OnDestroy {
	private _sub: Subscription;
	private settings: any;
	public settingsForm: FormGroup = new FormGroup({
		doNotLogout: new FormControl(false)
	});

	constructor(
		private _ss: SettingsService
	) { }

	ngOnInit(): void {
		this.settings = this._ss.loadSettings();
		this.settingsForm.get("doNotLogout")?.patchValue((this.settings === "true"));

		this._sub = this.settingsForm.valueChanges.subscribe((val: any) => {
			this._ss.saveSetting("doNotLogout", val.doNotLogout);
		});

	}
	
	ngOnDestroy(): void {
		this._sub.unsubscribe();
	}

	public onSubmit(): void {}
}
