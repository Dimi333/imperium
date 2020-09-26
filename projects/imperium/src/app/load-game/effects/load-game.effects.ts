import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LoadGameActions from '../actions/load-game.actions';



@Injectable()
export class LoadGameEffects {

  loadLoadGames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LoadGameActions.loadLoadGames),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => LoadGameActions.loadLoadGamesSuccess({ data })),
          catchError(error => of(LoadGameActions.loadLoadGamesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
