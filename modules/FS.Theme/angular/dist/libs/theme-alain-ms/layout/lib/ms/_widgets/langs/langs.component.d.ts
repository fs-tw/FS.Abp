import { ConfigStateService, SessionStateService, ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';
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
}
