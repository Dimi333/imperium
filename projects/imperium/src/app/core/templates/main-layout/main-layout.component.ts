import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SettingsActions from './../../../settings/actions/settings.actions';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'imp-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {
	public version: string = environment.version;

  constructor() { }

  ngOnInit(): void {
  }

}
