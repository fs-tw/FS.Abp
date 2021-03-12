import { ElementRef } from '@angular/core';
import { DomInsertionService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { Layout } from '../models/layout';
import * as i0 from "@angular/core";
export declare class LayoutStateService {
    private domInsertionService;
    private store;
    AppComponent: ElementRef;
    getThemeSettings(): Layout.ThemeSettings;
    getThemeSettings$(): Observable<Layout.ThemeSettings>;
    constructor(domInsertionService: DomInsertionService);
    static ɵfac: i0.ɵɵFactoryDef<LayoutStateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LayoutStateService>;
}
//# sourceMappingURL=layout-state.service.d.ts.map