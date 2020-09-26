import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SettingsActions from './../../../settings/actions/settings.actions';

@Component({
  selector: 'imp-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
