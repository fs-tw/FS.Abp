import { TestBed } from '@angular/core/testing';

import { PrinterService } from './printer.service';

describe('PrinterService', () => {
  let service: PrinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
