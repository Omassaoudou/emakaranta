import { TestBed, async, inject } from '@angular/core/testing';

import { TokenGuardGuard } from './token-guard.guard';

describe('TokenGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenGuardGuard]
    });
  });

  it('should ...', inject([TokenGuardGuard], (guard: TokenGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
