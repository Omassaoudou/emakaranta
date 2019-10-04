import { TestBed, async, inject } from '@angular/core/testing';

import { AdmiGuard } from './admi.guard';

describe('AdmiGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmiGuard]
    });
  });

  it('should ...', inject([AdmiGuard], (guard: AdmiGuard) => {
    expect(guard).toBeTruthy();
  }));
});
