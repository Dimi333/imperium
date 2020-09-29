import { Injectable } from '@angular/core';
import { switchMap, tap, map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromSettingsSelector from './../settings/selectors/settings.selectors';

@Injectable({
  providedIn: 'root'
})
export class GotoplayGuard implements CanActivate {
	constructor(
    		private store: Store,
		private router: Router,
	) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	return this.store.pipe(
		select(fromSettingsSelector.selectDoNotLogout),
		map((val: boolean) => {
			if(!val) {
				return true;
			} else {
				return this.router.parseUrl('/play-game');
			}
		})
	);
  }
  
}
