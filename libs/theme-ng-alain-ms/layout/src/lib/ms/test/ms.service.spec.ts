import { TestBed, TestBedStatic } from '@angular/core/testing';
import { filter } from 'rxjs/operators';

import { environment } from '@env/environment';
import { BrandService } from '@fs/theme.ng-alain-ms/shared';

describe('ms: BrandService', () => {
  let injector: TestBedStatic;
  let srv: BrandService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      providers: [BrandService],
    });
  });

  afterEach(() => ((environment as any).ms = null));

  it('should be initialized configuration', () => {
    (environment as any).ms = null;
    spyOn(localStorage, 'getItem').and.returnValue(`null`);
    srv = injector.get(BrandService);
    expect(srv.layout.hasTopbar).toBe(true);
    expect(srv.layout.hasSidebar).toBe(false);
    expect(srv.layout.hasFixed).toBe(false);
  });

  describe('should be trigger notify', () => {
    beforeEach(() => (srv = injector.get(BrandService)));

    it('when mobile changed in constructor', done => {
      srv.notify.pipe(filter(v => v != null && v === 'mobile')).subscribe(type => {
        expect(true).toBe(true);
        done();
      });
    });
    it('when layout changed', done => {
      srv.notify.pipe(filter(v => v != null && v === 'layout')).subscribe(type => {
        expect(true).toBe(true);
        done();
      });
      srv.setLayout('a', 1);
    });
  });
});
