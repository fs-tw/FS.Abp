import { ConfigStateService, SessionStateService, ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { BooleanInput } from '@delon/util';
export declare class HeaderI18nComponent {
    private configState;
    private sessionState;
    static ngAcceptInputType_showLangText: BooleanInput;
    showLangText: boolean;
    languages$: Observable<any>;
    get defaultLanguage$(): Observable<{
        displayName: string;
        flagIcon: string;
    }>;
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]>;
    get selectedLangCulture(): string;
    constructor(configState: ConfigStateService, sessionState: SessionStateService);
    change(cultureName: string): void;
}
