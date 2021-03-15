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
PostStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PostStateService_Factory() { return new PostStateService(); }, token: PostStateService, providedIn: "root" });
PostStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PostStateService.ctorParameters = () => [];
//# sourceMappingURL=post-state.service.js.map