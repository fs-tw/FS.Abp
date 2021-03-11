import { Resolve } from '@angular/router';
import { PostStateService } from './providers/post-state.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class RouteConfig implements Resolve<any> {
    private postStateService;
    constructor(postStateService: PostStateService);
    resolve(): void;
    static ɵfac: i0.ɵɵFactoryDef<RouteConfig, never>;
    static ɵprov: i0.ɵɵInjectableDef<RouteConfig>;
}
export declare class PostRoutingModule {
    static ɵfac: i0.ɵɵFactoryDef<PostRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<PostRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDef<PostRoutingModule>;
}
//# sourceMappingURL=post-routing.module.d.ts.map