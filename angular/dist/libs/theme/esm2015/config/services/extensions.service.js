import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ActionItem {
}
export class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["Theme::FS.Theme.Banner" /* Banner */]: new Subject(),
            ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: new Subject(),
            ["Theme::FS.Theme.Route" /* Route */]: new Subject(),
            ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: new Subject(),
            ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: new Subject(),
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