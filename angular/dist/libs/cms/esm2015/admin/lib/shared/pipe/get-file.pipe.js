import { Pipe } from '@angular/core';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    transform(value) {
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
    }
}
GetFileByIdPipe.ɵfac = function GetFileByIdPipe_Factory(t) { return new (t || GetFileByIdPipe)(i0.ɵɵdirectiveInject(i1.EnvironmentService)); };
GetFileByIdPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "getFileById", type: GetFileByIdPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GetFileByIdPipe, [{
        type: Pipe,
        args: [{
                name: 'getFileById'
            }]
    }], function () { return [{ type: i1.EnvironmentService }]; }, null); })();
//# sourceMappingURL=get-file.pipe.js.map