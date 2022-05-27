import { TestBed } from '@angular/core/testing';

import { SyncTableService } from './sync-table.service';

describe('SyncTableService', () => {
  let service: SyncTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
