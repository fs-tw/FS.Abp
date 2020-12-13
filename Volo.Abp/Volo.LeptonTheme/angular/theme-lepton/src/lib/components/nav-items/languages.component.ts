import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ConfigStateService, ApplicationConfiguration, SessionStateService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';

@Component({
  selector: 'abp-languages',
  // tslint:disable-next-line: component-max-inline-declarations
  template: `
    <div class="dropdown" ngbDropdown>
      <a
        *ngIf="defaultLanguage$ | async as defaultLang"
        class="btn"
        role="button"
        id="dropdownMenuLink"
        ngbDropdownToggle
      >
        <span
          class="flag-icon flag-icon-squared flag-icon-{{ defaultLang.flagIcon }}"
          [title]="defaultLang.displayName"
        ></span>
        <span class="current-language-name ml-1">{{ defaultLang.displayName }}</span>
      </a>
      <div
        ngbDropdownMenu
        class="dropdown-menu dropdown-menu-right"
        *ngIf="(dropdownLanguages$ | async)?.length > 0"
      >
        <a
          *ngFor="let lang of (dropdownLanguages$ | async) || []"
          class="dropdown-item pointer"
          (click)="changeLang(lang.cultureName)"
        >
          <span class="flag-icon flag-icon-{{ lang.flagIcon }} flag-icon-squared mr-2"></span>
          {{ lang?.displayName }}</a
        >
      </div>
    </div>
  `,
})
export class LanguagesComponent implements OnInit {
  get smallScreen(): boolean {
    return window.innerWidth < 992;
  }

  languages$ = this.configState.getDeep$('localization.languages');

  get defaultLanguage$(): Observable<{ displayName: string; flagIcon: string }> {
    return this.languages$.pipe(
      map(languages => {
        const lang: Partial<ApplicationConfiguration.Language> = snq(
          () => languages.find(language => language.cultureName === this.selectedLangCulture),
          {} as Partial<ApplicationConfiguration.Language>,
        );
        return {
          displayName: lang.displayName || '',
          flagIcon: lang.flagIcon,
        };
      }),
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
    return this.sessionState.getLanguage();
  }

  constructor(private configState: ConfigStateService, private sessionState: SessionStateService) {}

  ngOnInit() {}

  changeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }
}
