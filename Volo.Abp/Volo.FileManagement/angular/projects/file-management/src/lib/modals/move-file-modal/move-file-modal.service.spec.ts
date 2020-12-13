import { TestBed } from '@angular/core/testing';

import { MoveFileModalService } from './move-file-modal.service';

describe('MoveFileModalService', () => {
  let service: MoveFileModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveFileModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
