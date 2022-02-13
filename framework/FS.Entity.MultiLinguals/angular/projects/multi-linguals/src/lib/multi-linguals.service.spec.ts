import { TestBed } from '@angular/core/testing';

import { MultiLingualsService } from './multi-linguals.service';

describe('MultiLingualsService', () => {
  let service: MultiLingualsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiLingualsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
