import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ActionItem {
}
export class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: new Subject(),
            ["FormManagement::FS.Formal" /* Formal */]: new Subject(),
            ["FormManagement::FS.Group" /* Group */]: new Subject(),
            ["FormManagement::FS.Item" /* Item */]: new Subject(),
            ["FormManagement::FS.Record" /* Record */]: new Subject(),
            ["FormManagement::FS.RecordItem" /* RecordItem */]: new Subject(),
            ["FormManagement::FS.Version" /* Version */]: new Subject(),
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