import { TestBed } from '@angular/core/testing';

import { FormManagementService } from './form-management.service';

describe('FormManagementService', () => {
  let service: FormManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
