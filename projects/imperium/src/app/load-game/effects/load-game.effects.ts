import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Character } from './../../new-game/new-game.service';
import { LoadGameService } from './../load-game.service';

import * as LoadGameActions from '../actions/load-game.actions';


@Injectable()
export class LoadGameEffects {

  loadLoadGames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(LoadGameActions.loadLoadGames),
      concatMap((data: any) =>
	this.lgs.loadGame(data.data)
	.pipe(
          map(data => LoadGameActions.loadLoadGamesSuccess({ data })),
          catchError(error => of(LoadGameActions.loadLoadGamesFailure({ error })))
	)
      )
    );
  });



  constructor(
	  private actions$: Actions,
	  private lgs: LoadGameService
  ) {}

}
