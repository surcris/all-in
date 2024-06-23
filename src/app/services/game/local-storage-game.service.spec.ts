import { TestBed } from '@angular/core/testing';

import { LocalStorageGameService } from './local-storage-game.service';

describe('LocalStorageGameService', () => {
  let service: LocalStorageGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
