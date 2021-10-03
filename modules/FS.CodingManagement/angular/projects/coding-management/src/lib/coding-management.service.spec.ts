import { TestBed } from '@angular/core/testing';

import { CodingManagementService } from './coding-management.service';

describe('CodingManagementService', () => {
  let service: CodingManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
