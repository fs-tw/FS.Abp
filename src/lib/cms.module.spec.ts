import { async, TestBed } from '@angular/core/testing';
import { CmsModule } from './cms.module';

describe('CmsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CmsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CmsModule).toBeDefined();
  });
});
