import { ElementRef } from '@angular/core';
import { DomInsertionService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { Layout } from '../models/layout';
export declare class LayoutStateService {
    private domInsertionService;
    private store;
    AppComponent: ElementRef;
    getThemeSettings(): Layout.ThemeSettings;
    getThemeSettings$(): Observable<Layout.ThemeSettings>;
    constructor(domInsertionService: DomInsertionService);
}
