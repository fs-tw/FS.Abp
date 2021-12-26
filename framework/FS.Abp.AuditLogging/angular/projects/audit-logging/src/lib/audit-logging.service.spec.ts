import { TestBed } from '@angular/core/testing';

import { AuditLoggingService } from './audit-logging.service';

describe('AuditLoggingService', () => {
  let service: AuditLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
