import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import * as i0 from "@angular/core";
export class PostStateService {
    constructor() {
        this.store = new InternalStore({});
    }
    getBlog() {
        return this.store.sliceState(state => state.Blog);
    }
    setBlog(blog) {
        this.store.patch({ Blog: blog });
    }
}
PostStateService.ɵfac = function PostStateService_Factory(t) { return new (t || PostStateService)(); };
PostStateService.ɵprov = i0.ɵɵdefineInjectable({ token: PostStateService, factory: PostStateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=post-state.service.js.map