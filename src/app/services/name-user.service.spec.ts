import { TestBed } from '@angular/core/testing';

import { NameUserService } from './name-user.service';

describe('NameUserService', () => {
  let service: NameUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
