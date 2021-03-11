import { Injector, TrackByFunction } from '@angular/core';
import { ToolbarComponent } from '@abp/ng.theme.shared/extensions';
import { PageToolbarComponent as AbpPageToolbarComponent } from '@abp/ng.theme.shared/extensions';
export declare class PageToolbarComponent<R = any> extends AbpPageToolbarComponent<R> {
    private readonly _injector;
    readonly trackByFn: TrackByFunction<ToolbarComponent<R>>;
    constructor(_injector: Injector);
}
