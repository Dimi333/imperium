import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PlayGameService } from './../play-game.service';

import * as PlayGameActions from '../actions/play-game.actions';



@Injectable()
export class PlayGameEffects {

  loadPlayGames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PlayGameActions.loadPlayGames),
      concatMap(() =>
	this.pgs.loadCharacter()
        .pipe(
          map(data => PlayGameActions.loadPlayGamesSuccess({ data })),
          catchError(error => of(PlayGameActions.loadPlayGamesFailure({ error }))))
      )
    );
  });



  constructor(
	  private actions$: Actions,
	  private pgs: PlayGameService
  ) {}

}
