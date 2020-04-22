import { TestBed } from '@angular/core/testing';

import { CodeProcessService } from './code-process.service';

describe('CodeProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeProcessService = TestBed.get(CodeProcessService);
    expect(service).toBeTruthy();
  });
});
