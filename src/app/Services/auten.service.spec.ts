import { TestBed } from '@angular/core/testing';

import { AutenService } from './auten.service';

describe('AutenService', () => {
  let service: AutenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
