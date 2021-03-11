import { Injector, TrackByFunction } from '@angular/core';
import { ToolbarComponent } from '@abp/ng.theme.shared/extensions';
import { PageToolbarComponent as AbpPageToolbarComponent } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
export declare class PageToolbarComponent<R = any> extends AbpPageToolbarComponent<R> {
    private readonly _injector;
    readonly trackByFn: TrackByFunction<ToolbarComponent<R>>;
    constructor(_injector: Injector);
    static ɵfac: i0.ɵɵFactoryDef<PageToolbarComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PageToolbarComponent<any>, "nz-page-toolbar", ["nzPageToolbar"], {}, {}, never, never>;
}
//# sourceMappingURL=page-toolbar.component.d.ts.map