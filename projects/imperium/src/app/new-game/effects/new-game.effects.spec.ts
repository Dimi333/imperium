import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NewGameEffects } from './new-game.effects';

describe('NewGameEffects', () => {
  let actions$: Observable<any>;
  let effects: NewGameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewGameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NewGameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
