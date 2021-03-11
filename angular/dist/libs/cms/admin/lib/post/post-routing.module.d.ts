import { Resolve } from '@angular/router';
import { PostStateService } from './providers/post-state.service';
export declare class RouteConfig implements Resolve<any> {
    private postStateService;
    constructor(postStateService: PostStateService);
    resolve(): void;
}
export declare class PostRoutingModule {
}
