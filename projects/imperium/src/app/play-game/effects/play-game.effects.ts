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

  loadInventory = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PlayGameActions.loadPlayGames),
      concatMap(() =>
	this.pgs.loadInventory()
        .pipe(
          map(data => PlayGameActions.loadInventorySuccess({ data })),
          catchError(error => of(PlayGameActions.loadInventoryFailure({ error }))))
      )
    );
  });

  buyItem$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PlayGameActions.buyItem),
      concatMap((data: any) =>
	this.pgs.buyItem(data.data)
        .pipe(
          map(data => PlayGameActions.buyItemSuccess({ data })),
          catchError(error => of(PlayGameActions.buyItemFailure({ error }))))
      )
    );
  });



  constructor(
	  private actions$: Actions,
	  private pgs: PlayGameService
  ) {}

}
