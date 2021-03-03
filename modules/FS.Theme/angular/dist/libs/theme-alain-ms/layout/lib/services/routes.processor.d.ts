import { ABP, TreeNode } from '@abp/ng.core';
import { Injector } from '@angular/core';
import { MSMenu, MSProductCategory, MSServiceNavConfig } from '../models';
import { Observable } from 'rxjs';
import { RouterStateSnapshot } from '@angular/router';
export declare class RoutesProcessor {
    private injector;
    private get routesService();
    private get localizationPipe();
    RouterState: RouterStateSnapshot;
    get CurrentUrl(): string;
    get CurrentRoute(): TreeNode<ABP.Route>;
    get NavConfigs(): TreeNode<ABP.Route>[];
    get CurrentNavConfig(): MSServiceNavConfig;
    constructor(injector: Injector);
    get Category$(): Observable<MSProductCategory[]>;
    GetPageNavs(routerState: RouterStateSnapshot, nav: MSServiceNavConfig): MSMenu[];
    private searchRoute;
    private transMenu;
    formatParams(text: string): string;
    private getParamKeyValue;
    private searchRouter;
}
