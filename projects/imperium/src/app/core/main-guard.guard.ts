import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from './../core/imp-store/store';
import * as fromLoginSelector from './../core/imp-store/login.selector';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SettingsService } from './../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuardGuard implements CanActivate {
	public isLoggedIn$: Observable<boolean>;

	constructor(
		private store: Store<Player>, 
		private router: Router,
		private _ss: SettingsService
	) {
		this.isLoggedIn$ = this.store.pipe(select(fromLoginSelector.selectPlayerLoggedIn));
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.isLoggedIn$.pipe(
			switchMap((val: boolean) => {
				if(val) {
					return of(true);
				} else {
					if(this._ss.loadSettings() === "true") {
						return of(true);
					} else {
						this.router.navigate(['']);
						return of(false);
					}
				}
			})
		);
	}
}
