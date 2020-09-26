import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { NewGameService } from './../new-game.service';
import { Character } from './../new-game.service';

import * as NewGameActions from '../actions/new-game.actions';



@Injectable()
export class NewGameEffects {

  loadNewGames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NewGameActions.loadNewGames),
      concatMap((data: any) => 
	this.ngs.createNewGame(data)
	.pipe(
          map(data => NewGameActions.loadNewGamesSuccess({ data })),
          catchError(error => of(NewGameActions.loadNewGamesFailure({ error }))))
      )
    );
  });



  constructor(
	  private ngs: NewGameService,
	  private actions$: Actions
  ) {}

}
