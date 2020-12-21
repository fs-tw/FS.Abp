import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ALAIN_I18N_TOKEN, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';

// import { I18NService } from '@fs/theme.ng-alain/core';
import { Observable } from 'rxjs';
import { ApplicationConfiguration, ConfigStateService, SessionStateService,LocalizationService } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { map } from 'rxjs/operators';
import snq from 'snq';
import { Store } from '@ngxs/store';
//todo:refresh menu

@Component({
  selector: 'header-i18n',
  template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ defaultLanguage$ | async }}
      <i nz-icon nzType="down"></i>
    </div>
    <i
      *ngIf="!showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
      nz-icon
      nzType="global"
    ></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let lang of dropdownLanguages$ | async"
          [nzSelected]="lang.cultureName === selectedLangCulture"
          (click)="onChangeLang(lang.cultureName)"
        >
          <span role="img" [attr.aria-label]="lang?.displayName" class="pr-xs">{{ lang.cultureName }}</span>
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderI18nComponent {
  languages$: Observable<ApplicationConfiguration.Language[]> = this.configStateService.getDeep$('localization.languages');

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

  get selectedLangCulture(): string {
    return this.sessionStateService.getLanguage();//this.store.selectSnapshot(SessionState.getLanguage);
  }
  /** Whether to display language text */
  @Input() @InputBoolean() showLangText = true;

  // get langs() {
  //   return this.i18n.getLangs();
  // }

  get curLangCode() {
    return this.settings.layout.lang;
  }

  constructor(
    private settings: SettingsService,
    // @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    @Inject(DOCUMENT) private doc: any,
    private store: Store,
    private sessionStateService: SessionStateService,
    private configStateService: ConfigStateService
  ) { }

  onChangeLang(cultureName: string) {
    this.sessionStateService.setLanguage(cultureName);
  }
}
