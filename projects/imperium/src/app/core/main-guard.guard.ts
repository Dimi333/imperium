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
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return of(true);
	}
}
