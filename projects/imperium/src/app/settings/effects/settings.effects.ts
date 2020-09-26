import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { SettingsService } from './../settings.service';

import * as SettingsActions from '../actions/settings.actions';



@Injectable()
export class SettingsEffects {

  loadSettingss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SettingsActions.loadSettings),
      concatMap(() =>
	this.settings.loadSettings().pipe(
          map(data => SettingsActions.loadSettingsSuccess({ data })),
          catchError(error => of(SettingsActions.loadSettingsFailure({ error })))
	)
      )
    );
  });



  constructor(private actions$: Actions, private settings: SettingsService) {}

}
