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
ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
ExtensionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ExtensionsService.ctorParameters = () => [];
//# sourceMappingURL=extensions.service.js.map