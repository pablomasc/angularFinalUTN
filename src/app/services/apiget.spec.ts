import { TestBed } from '@angular/core/testing';

import { Apiget } from './apiget';

describe('Apiget', () => {
  let service: Apiget;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiget);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
