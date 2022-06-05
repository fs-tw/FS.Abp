import { TestBed } from '@angular/core/testing';

import { PrinterManagementService } from './printer-management.service';

describe('PrinterManagementService', () => {
  let service: PrinterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
