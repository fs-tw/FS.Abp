import { HttpClientModule } from '@angular/common/http';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SettingsService } from '@delon/theme';
import { SharedModule } from '@fs/theme.ng-alain-ms/shared';
import { I18NService } from './i18n.service';

describe('Service: I18n', () => {
  let injector: TestBedStatic;
  let srv: I18NService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      providers: [I18NService, SettingsService],
    });
  });

  describe('#fanyi', () => {
    beforeEach(() => {
      srv = injector.get(I18NService) as I18NService;
      srv.load('en-US', { 'app.title': 'App Title' });
      srv.use('en-US');
    });

    it('should be load languages data', () => {
      expect(srv.fanyi('app.title')).toBe('App Title');
    });

    it('should be override languages data when as same as key', () => {
      expect(srv.fanyi('app.title')).toBe('App Title');
      srv.load('en-US', { 'app.title': 'App Title Changed' });
      expect(srv.fanyi('app.title')).toBe('App Title Changed');
    });

    it('should be interpolate params', () => {
      srv.load('en-US', { 'app.title': 'Title: {{title}}' });
      const res = srv.fanyi('app.title', { title: 'asdf' });
      expect(res).toBe(`Title: asdf`);
    });

    it('should be safe html', () => {
      const dom = injector.get(DomSanitizer) as DomSanitizer;
      spyOn(dom, 'bypassSecurityTrustHtml');
      const res = srv.fanyi('app.title', {}, true) as SafeHtml;
      expect(dom.bypassSecurityTrustHtml).toHaveBeenCalled();
    });

    it('should be console warn when key not found', () => {
      spyOn(console, 'warn');
      expect(console.warn).not.toHaveBeenCalled();
      srv.fanyi('invalid-key');
      expect(console.warn).toHaveBeenCalled();
    });

    it('should be trigger notify when changed language', () => {
      srv.use('en-US');
      srv.change.subscribe((lang) => {
        expect(lang).toBe('en-US');
      });
    });
  });

  it('should be layout first', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ lang: 'en-US' }));
    srv = injector.get(I18NService) as I18NService;
    expect(srv.defaultLang).toBe('en-US');
  });

  it('should be use browser language', () => {
    spyOn(localStorage, 'getItem').and.returnValue(`null`);
    const winNav = window.navigator;
    //spyOnProperty(winNav, 'languages').and.returnValue(['zh-TW']);
    srv = injector.get(I18NService) as I18NService;
    expect(srv.defaultLang).toBe('zh-TW');
  });
});
