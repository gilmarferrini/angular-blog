import { TestBed } from '@angular/core/testing';

import { EnsureAuthenticatedGuard } from './ensure-authenticated.guard';

describe('EnsureAuthenticatedGuard', () => {
  let guard: EnsureAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnsureAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
