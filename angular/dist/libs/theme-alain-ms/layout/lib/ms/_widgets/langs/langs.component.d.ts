import { ConfigStateService, SessionStateService, ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MSLangsComponent {
    private configState;
    private sessionState;
    languages$: Observable<any>;
    get defaultLanguage$(): Observable<{
        displayName: string;
        flagIcon: string;
    }>;
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]>;
    get selectedLangCulture(): string;
    constructor(configState: ConfigStateService, sessionState: SessionStateService);
    change(cultureName: string): void;
    static ɵfac: i0.ɵɵFactoryDef<MSLangsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSLangsComponent, "ms-langs", never, {}, {}, never, never>;
}
//# sourceMappingURL=langs.component.d.ts.map