import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as NewGameActions from '../actions/new-game.actions';



@Injectable()
export class NewGameEffects {

  loadNewGames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NewGameActions.loadNewGames),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => NewGameActions.loadNewGamesSuccess({ data })),
          catchError(error => of(NewGameActions.loadNewGamesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
