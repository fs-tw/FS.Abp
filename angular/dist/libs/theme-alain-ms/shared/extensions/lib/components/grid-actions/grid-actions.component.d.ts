import { Injector, TrackByFunction } from '@angular/core';
import { EntityAction, GridActionsComponent as AbpGridActionsComponent } from '@abp/ng.theme.shared/extensions';
import * as i0 from "@angular/core";
export declare class GridActionsComponent<R = any> extends AbpGridActionsComponent<R> {
    icon: string;
    readonly index: number;
    text: string;
    readonly trackByFn: TrackByFunction<EntityAction<R>>;
    constructor(injector: Injector);
    static ɵfac: i0.ɵɵFactoryDef<GridActionsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GridActionsComponent<any>, "nz-grid-actions", ["nzGridActions"], { "icon": "icon"; "index": "index"; "text": "text"; }, {}, never, never>;
}
//# sourceMappingURL=grid-actions.component.d.ts.map