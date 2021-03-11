import { Injector, TrackByFunction } from '@angular/core';
import { EntityAction, GridActionsComponent as AbpGridActionsComponent } from '@abp/ng.theme.shared/extensions';
export declare class GridActionsComponent<R = any> extends AbpGridActionsComponent<R> {
    icon: string;
    readonly index: number;
    text: string;
    readonly trackByFn: TrackByFunction<EntityAction<R>>;
    constructor(injector: Injector);
}
