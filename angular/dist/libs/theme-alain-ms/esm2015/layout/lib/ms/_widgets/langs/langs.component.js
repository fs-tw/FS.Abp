import { ConfigStateService, SessionStateService } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import snq from 'snq';
export class MSLangsComponent {
    constructor(configState, sessionState) {
        this.configState = configState;
        this.sessionState = sessionState;
        this.languages$ = this.configState.getDeep$('localization.languages');
    }
    get defaultLanguage$() {
        return this.languages$.pipe(map(languages => {
            const lang = snq(() => languages.find(language => language.cultureName === this.selectedLangCulture), {});
            return {
                displayName: lang.displayName || '',
                flagIcon: lang.flagIcon,
            };
        }));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(map(languages => snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.sessionState.getLanguage();
    }
    change(cultureName) {
        this.sessionState.setLanguage(cultureName);
    }
}
MSLangsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ms-langs',
                template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n  <span class=\"alain-ms__topbar-item-btn\" >\r\n    <span >{{ defaultLang.displayName }}</span>\r\n  </span>\r\n  <ul class=\"alain-ms__topbar-dd-menu\">\r\n    <li *ngFor=\"let lang of (dropdownLanguages$ | async)\" (click)=\"change(lang.cultureName)\">\r\n      <a class=\"alain-ms__topbar-dd-item\">{{ lang?.displayName }}</a>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n\r\n",
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MSLangsComponent.ctorParameters = () => [
    { type: ConfigStateService },
    { type: SessionStateService }
];
//# sourceMappingURL=langs.component.js.map