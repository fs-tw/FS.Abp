import { TestBed } from '@angular/core/testing';

import { CmsKitManagementService } from './cms-kit-management.service';

describe('CmsKitManagementService', () => {
  let service: CmsKitManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsKitManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
