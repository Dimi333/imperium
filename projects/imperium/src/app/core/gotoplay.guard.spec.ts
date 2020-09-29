import { TestBed } from '@angular/core/testing';

import { GotoplayGuard } from './gotoplay.guard';

describe('GotoplayGuard', () => {
  let guard: GotoplayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GotoplayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
