import { ConfigStateService, SessionStateService } from '@abp/ng.core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import snq from 'snq';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@angular/common";
function MSLangsComponent_ng_container_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("click", function MSLangsComponent_ng_container_0_li_5_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r5); const lang_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.change(lang_r3.cultureName); });
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(lang_r3 == null ? null : lang_r3.displayName);
} }
function MSLangsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 2);
    i0.ɵɵtemplate(5, MSLangsComponent_ng_container_0_li_5_Template, 3, 1, "li", 3);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const defaultLang_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(defaultLang_r1.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 2, ctx_r0.dropdownLanguages$));
} }
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
MSLangsComponent.ɵfac = function MSLangsComponent_Factory(t) { return new (t || MSLangsComponent)(i0.ɵɵdirectiveInject(i1.ConfigStateService), i0.ɵɵdirectiveInject(i1.SessionStateService)); };
MSLangsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSLangsComponent, selectors: [["ms-langs"]], hostVars: 4, hostBindings: function MSLangsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "alain-ms__topbar-dd-item"]], template: function MSLangsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MSLangsComponent_ng_container_0_Template, 7, 4, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.defaultLanguage$));
    } }, directives: [i2.NgIf, i2.NgForOf], pipes: [i2.AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLangsComponent, [{
        type: Component,
        args: [{
                selector: 'ms-langs',
                templateUrl: './langs.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.ConfigStateService }, { type: i1.SessionStateService }]; }, null); })();
//# sourceMappingURL=langs.component.js.map