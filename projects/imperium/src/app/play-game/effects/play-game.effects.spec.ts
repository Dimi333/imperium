import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlayGameEffects } from './play-game.effects';

describe('PlayGameEffects', () => {
  let actions$: Observable<any>;
  let effects: PlayGameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayGameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PlayGameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
