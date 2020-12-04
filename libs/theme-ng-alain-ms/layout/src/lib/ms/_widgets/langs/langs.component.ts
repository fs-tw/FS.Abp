import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SettingsService, ALAIN_I18N_TOKEN } from '@delon/theme';

import { I18NService, LangType } from '@fs/theme.ng-alain-ms/core';
import { BrandService } from '@fs/theme.ng-alain-ms/shared';
import { Select, Store } from '@ngxs/store'
import { ConfigStateService, ApplicationConfiguration, SessionStateService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';
//todo:refresh menu

@Component({
  selector: 'ms-langs',
  templateUrl: './langs.component.html',
  host: {
    '[class.alain-ms__topbar-item]': 'true',
    '[class.alain-ms__topbar-dd]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MSLangsComponent implements OnInit, OnDestroy {
  languages$: Observable<ApplicationConfiguration.Language[]>=this.configStateService.getDeep$('localization.languages');//

  get selectedLangCulture(): string {
    return this.sessionStateService.getLanguage();
  }
  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(
            () => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName,
          ),
        '',
      ),
    );
  }

  get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)),
        [],
      ),
    );
  }
  private brand$: Subscription;
  langs: any[];
  text: string;

  get isMobile() {
    return this.srv.isMobile;
  }

  constructor(
    private store: Store,
    private srv: BrandService,
    private settingsSrv: SettingsService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    @Inject(DOCUMENT) private doc: any,
    private cd: ChangeDetectorRef,
    private sessionStateService: SessionStateService,
    private configStateService: ConfigStateService
  ) {
    this.langs = this.i18n.getLangs();
    this.update();
  }

  private update() {
    const item = this.langs.find(l => l.code === this.i18n.currentLang) || this.langs[0];
    this.text = item.text;
  }

  change(lang: LangType) {
    this.i18n.use(lang);
    this.settingsSrv.setLayout('lang', lang);
    this.update();
    setTimeout(() => this.doc.location.reload());
  }

  ngOnInit(): void {
    this.brand$ = this.srv.notify.pipe(filter(t => t === 'mobile')).subscribe(() => this.cd.detectChanges());
  }

  ngOnDestroy(): void {
    this.brand$.unsubscribe();
  }
  onChangeLang(cultureName: string) {
    this.sessionStateService.setLanguage(cultureName);
  }
}
