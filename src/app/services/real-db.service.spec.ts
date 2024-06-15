import { TestBed } from '@angular/core/testing';

import { RealDBService } from './real-db.service';

describe('RealDBService', () => {
  let service: RealDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
