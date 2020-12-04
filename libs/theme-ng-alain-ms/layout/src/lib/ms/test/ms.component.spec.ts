import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { I18NService } from '@fs/theme.ng-alain-ms/core';
import { createTestContext } from '@delon/testing';
import { AlainThemeModule, ALAIN_I18N_TOKEN } from '@delon/theme';
import { SharedModule } from '@fs/theme.ng-alain-ms/shared';
import { MSLayoutComponent } from '../ms.component';
import { BrandService } from '../ms.service';

describe('ms: layout-ms', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let srv: BrandService;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        AlainThemeModule.forRoot(),
        SharedModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }],
      declarations: [MSLayoutComponent, TestComponent],
    });
  });

  describe('should set the body style', () => {
    beforeEach(() => {
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
      srv = TestBed.inject(BrandService);
      page = new PageObject();
    });

    it('when inited', () => {
      srv.triggerNotify();
      fixture.detectChanges();
      page
        .checkBodyClass('alain-ms__has-topbar')
        .checkBodyClass('alain-ms__has-sidebar', false)
        .checkBodyClass('alain-ms__has-fixed', false);
    });
    it('when destroy', () => {
      context.comp.ngOnDestroy();
      page
        .checkBodyClass('alain-ms__has-topbar', false)
        .checkBodyClass('alain-ms__has-sidebar', false)
        .checkBodyClass('alain-ms__has-fixed', false);
    });
    it('when changed', () => {
      srv.setTopbar(true);
      srv.setSidebar(false);
      srv.setFixed(true);
      fixture.detectChanges();
      page
        .checkBodyClass('alain-ms__has-topbar', true)
        .checkBodyClass('alain-ms__has-sidebar', false)
        .checkBodyClass('alain-ms__has-fixed', true);
    });
  });

  describe('should be change layout via route data', () => {
    it('with hasAllNav', () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { data: { hasAllNav: true } } } });
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
      expect(context.comp.hasAllNav).toBe(true);
    });

    it('with hasSidebar', () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: { snapshot: { data: { hasSidebar: false } } } });
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
      expect(context.comp.hasSidebar).toBe(false);
    });
  });

  class PageObject {
    checkBodyClass(cls: string, status = true): this {
      expect(document.body.classList.contains(cls)).toBe(status);
      return this;
    }
    checkCls(cls: string, status = true): this {
      const nodes = document.querySelectorAll(cls);
      if (status) {
        expect(nodes.length).toBe(1);
      } else {
        expect(nodes.length).toBe(0);
      }
      return this;
    }
  }
});

@Component({
  template: ` <layout-ms #comp></layout-ms> `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: MSLayoutComponent;
}
