import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PageService } from './providers/page.service';
export declare class RouteConfig implements Resolve<any> {
    private pageService;
    constructor(pageService: PageService);
    resolve(): void;
}
export declare class DetailRouteConfig implements Resolve<any> {
    private pageService;
    constructor(pageService: PageService);
    resolve(route: ActivatedRouteSnapshot): void;
}
export declare class TagManagementRoutingModule {
}
