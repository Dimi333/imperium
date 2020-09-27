import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';	
import { SettingsService } from './../settings.service';
import { Subscription } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'imp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit, OnDestroy {
	private _sub: Subscription;
	private _sub2: Subscription;
	public settingsForm: FormGroup = new FormGroup({
		doNotLogout: new FormControl(false)
	});

	constructor(
		private _ss: SettingsService
	) { }

	ngOnInit(): void {
		this._sub = this.settingsForm.valueChanges.subscribe((val: any) => {
			this._ss.saveSetting("doNotLogout", val.doNotLogout);
		});

	}

	ngAfterContentInit(): void {
		this._sub2 = this._ss.loadSettings().pipe(last()).subscribe((val: boolean) => {
			this.settingsForm.get("doNotLogout")?.patchValue((val));
		});
	}
	
	ngOnDestroy(): void {
		this._sub?.unsubscribe();
		this._sub2?.unsubscribe();
	}

	public onSubmit(): void {}
}
