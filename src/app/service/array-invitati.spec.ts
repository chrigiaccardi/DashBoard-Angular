import { TestBed } from '@angular/core/testing';

import { ArrayInvitati } from './array-invitati';

describe('ArrayInvitati', () => {
  let service: ArrayInvitati;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayInvitati);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
