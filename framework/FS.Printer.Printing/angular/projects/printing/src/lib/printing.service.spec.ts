import { TestBed } from '@angular/core/testing';

import { PrintingService } from './printing.service';

describe('PrintingService', () => {
  let service: PrintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
