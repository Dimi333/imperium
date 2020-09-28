import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SettingsService } from './../settings/settings.service';
import * as fromLoadGame from './../load-game/selectors/load-game.selectors';

@Injectable({
  providedIn: 'root'
})
export class MainGuardGuard implements CanActivate {
	public isLoggedIn$: Observable<boolean>;

	constructor(
		private router: Router,
		private _ss: SettingsService,
		private store: Store
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.store.pipe(
			select(fromLoadGame.selectToken),
			map(val => {
				if(typeof val !== 'undefined') {
					return true;
				} else {
					return this.router.parseUrl('/');
				}
			})
		);
	}
}
