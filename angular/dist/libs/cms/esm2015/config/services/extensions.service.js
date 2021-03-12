import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ActionItem {
}
export class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["Cms::FS.Cms.Blogs" /* Blog */]: new Subject(),
            ["Cms::FS.Cms.PostManagement" /* Post */]: new Subject(),
            ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: new Subject(),
        };
    }
    action(type, data) {
        this.Actions$[type].next(data);
    }
}
ExtensionsService.ɵfac = function ExtensionsService_Factory(t) { return new (t || ExtensionsService)(); };
ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ token: ExtensionsService, factory: ExtensionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=extensions.service.js.map