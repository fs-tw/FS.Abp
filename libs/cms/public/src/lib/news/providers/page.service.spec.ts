import { TestBed } from '@angular/core/testing';

import { PageService } from './page.service';

describe('PageService', () => {
  let service: PageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
