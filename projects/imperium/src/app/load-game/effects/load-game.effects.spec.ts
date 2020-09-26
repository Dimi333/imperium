import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadGameEffects } from './load-game.effects';

describe('LoadGameEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadGameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadGameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadGameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
