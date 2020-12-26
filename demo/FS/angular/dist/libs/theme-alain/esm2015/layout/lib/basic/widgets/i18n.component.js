import { __decorate, __metadata } from "tslib";
import { ConfigStateService, SessionStateService } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { InputBoolean } from '@delon/util';
import snq from 'snq';
export class HeaderI18nComponent {
    constructor(configState, sessionState) {
        this.configState = configState;
        this.sessionState = sessionState;
        this.showLangText = true;
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
HeaderI18nComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-i18n',
                template: "<ng-container *ngIf=\"defaultLanguage$ | async as defaultLang\">\r\n    <i *ngIf=\"!showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\" nz-icon\r\n        nzType=\"global\"></i>\r\n    <div *ngIf=\"showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\r\n        <i nz-icon nzType=\"global\"></i>\r\n        {{ defaultLang.displayName }}\r\n        <i nz-icon nzType=\"down\"></i>\r\n    </div>\r\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\r\n        <ul nz-menu>\r\n            <li nz-menu-item *ngFor=\"let lang of (dropdownLanguages$ | async)\"\r\n                [nzSelected]=\"lang.displayName === defaultLang.displayName\" (click)=\"change(lang.cultureName)\">\r\n                {{ lang?.displayName }}\r\n            </li>\r\n        </ul>\r\n    </nz-dropdown-menu>\r\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
HeaderI18nComponent.ctorParameters = () => [
    { type: ConfigStateService },
    { type: SessionStateService }
];
HeaderI18nComponent.propDecorators = {
    showLangText: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);
//# sourceMappingURL=i18n.component.js.map