import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'imp-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit, OnDestroy {
	public isLoggedIn$: Observable<boolean>;
	private _sub: Subscription;

	constructor(private router: Router) {
		// this.isLoggedIn$ = this.store.pipe(select(fromLoginSelector.selectPlayerLoggedIn));
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}
