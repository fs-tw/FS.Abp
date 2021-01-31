import { TestBed } from '@angular/core/testing';

import { LineNotifyService } from './line-notify.service';

describe('LineNotifyService', () => {
  let service: LineNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
